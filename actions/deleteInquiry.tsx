"use server";

import prisma from "@/lib/prisma";
import { revalidatePath, revalidateTag } from "next/cache";

export async function deleteInquiry(id: number) {
  try {
    await prisma.consultation.delete({
      where: {
        id,
      },
    });
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error(error);
    revalidatePath("/admin");
    return { success: false };
  }
}
