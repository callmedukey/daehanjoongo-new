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
  const inquiry = await prisma.consultation.update({
    where: { id: inquiryId },
    data: { consultantId },
  });
  if (!inquiry) {
    return { success: false, error: "상담 수정 오류입니다." };
  }

  revalidatePath("/admin");
  return { success: true };
};
