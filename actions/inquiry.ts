'use server';
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const selectConsultant = async ({
  inquiryId,
  consultantId,
}: {
  inquiryId: number;
  consultantId: number;
}) => {

  const consultant = await prisma.consultant.findUnique({
    where: { id: consultantId },
  });

  if (!consultant) {
    return { success: false, error: "상담원 찾을 수 없음" };
  }

  const inquiry = await prisma.consultation.update({
    where: { id: inquiryId },
    data: {
      consultantName: consultant.name,
      consultantPhoneNumber: consultant.phoneNumber,
    },
  });
  if (!inquiry) {
    return { success: false, error: "상담 수정 오류입니다." };
  }

  revalidatePath("/admin");
  return { success: true };
};
