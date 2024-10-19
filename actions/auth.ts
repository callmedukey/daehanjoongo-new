"use server";

import bcrypt from "bcrypt";
import { adminPasswordSchema, loginSchema } from "@/description/zod";
import prisma from "@/lib/prisma";
import { createSession, deleteSession } from "./session";
import { redirect } from "next/navigation";

export async function login({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const validatedFields = loginSchema.safeParse({ username, password });
  if (!validatedFields.success) {
    return {
      error: "올바른 정보를 입력하세요",
    };
  }

  const user = await prisma.admin.findUnique({
    where: {
      username: validatedFields.data.username,
    },
  });
  if (!user) {
    return {
      error: "아이디 또는 비밀번호가 일치하지 않습니다.",
    };
  }
  const passwordMatch = await bcrypt.compare(
    validatedFields.data.password,
    user.password
  );

  if (!passwordMatch) {
    return {
      error: "아이디 또는 비밀번호가 일치하지 않습니다.",
    };
  }

  await createSession({ userId: user.id });

  redirect("/admin");
}

export async function logout() {
  deleteSession();
  redirect("/");
}

export async function changePassword({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}) {
  const validatedFields = adminPasswordSchema.safeParse({
    password,
    confirmPassword,
  });
  if (!validatedFields.success) {
    return {
  message: "올바른 정보를 입력하세요",
    };
  }

  const admin = await prisma.admin.findFirst({

  });
  if (!admin) {
    return {
      message: "관리자 정보를 찾을 수 없습니다.",
    };
  }

  const hashedPassword = await bcrypt.hash(validatedFields.data.password, 10);
  const updatedAdmin = await prisma.admin.update({
    where: {
      id: admin.id,
    },
    data: {
      password: hashedPassword,
    },
  });

  if (!updatedAdmin) {
    return {
      message: "관리자 정보를 업데이트할 수 없습니다.",
    };
  }

  return {
    message: "비밀번호가 변경되었습니다.",
  };
}
