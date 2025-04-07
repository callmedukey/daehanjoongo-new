"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";
import formSchema from "@/description/zod";
import { headers } from "next/headers";
import UAParser from "ua-parser-js";
import { SolapiMessageService } from "solapi";
import { revalidatePath } from "next/cache";
import type { Consultant } from "@prisma/client";

export async function submitInquiry(formData: z.infer<typeof formSchema>) {
  try {
    const validated = formSchema.safeParse(formData);
    if (!validated.success) {
      return { message: "잘못된 입력입니다." };
    }

    const headersList = headers();
    const ipAddress = headersList.get("CF-Connecting-IP")?.split(",")[0];

    // if (!ipAddress) {
    //   throw new Error("IP address not found.");
    // }

    const rawDevice = UAParser(headersList.get("user-agent"))?.device;

    const isDesktop =
      rawDevice.type === undefined ||
      !["wearable", "mobile"].includes(rawDevice.type);

    const { car, phone } = validated.data;

    const consultants = await prisma.consultant.findMany({
      where: {
        active: true,
      },
      orderBy: {
        id: "asc",
      },
    });

    if (consultants.length === 0) {
      throw new Error("상담원이 없습니다.");
    }

    const lastConsultantId = consultants[consultants.length - 1].id;
    const firstConsultantId = consultants[0].id;

    const nextConsultantId = (global as any)?.nextConsultant;

    if (!nextConsultantId) {
      (global as any).nextConsultant = firstConsultantId;
    }

    const consultation = await prisma.consultation.create({
      data: {
        car,
        phoneNumber: phone,
        ipAddress,
        device: isDesktop ? "컴퓨터" : "모바일",
        consultantName: consultants.find(
          (consultant: Consultant) => consultant.id === nextConsultantId
        )?.name,
        consultantPhoneNumber: consultants.find(
          (consultant: Consultant) => consultant.id === nextConsultantId
        )?.phoneNumber,
      },
    });

    if (!consultation) {
      throw new Error("상담원 배정 오류가 발생했습니다.");
    }

    const solapi = new SolapiMessageService(
      process.env.SOLAPI_API_KEY as string,
      process.env.SOLAPI_API_SECRET as string
    );
    await solapi.sendOne({
      to: consultants
        .find((consultant: Consultant) => consultant.id === nextConsultantId)
        ?.phoneNumber.replaceAll("-", "") as string,
      from: process.env.SOLAPI_SENDER_PHONE_NUMBER as string,
      text: `
      전국중고차수출
      차량: ${car}
      연락처: ${phone}
      `,
    });

    revalidatePath("/admin");

    if (nextConsultantId >= lastConsultantId) {
      (global as any).nextConsultant = firstConsultantId;
    } else {
      const index = consultants.findIndex(
        (consultant) => consultant.id === nextConsultantId
      );
      (global as any).nextConsultant = consultants[index + 1].id;
    }

    return { message: "문의 접수가 완료되었습니다." };
  } catch (error) {
    console.error(error);
    return { message: "서버 오류가 발생했습니다." };
  }
}
