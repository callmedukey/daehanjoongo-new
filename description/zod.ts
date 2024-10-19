import { z } from "zod";

const formSchema = z.object({
  car: z.string().min(1, { message: "차량명을 입력해 주세요" }).trim(),
  phone: z
    .string()
    .length(13, { message: "올바른 전화번호를 입력해 주세요" })
    .trim()
    .regex(/^[0-9\-]+$/, {
      message: "올바른 전화번호를 입력해 주세요",
    }),
  agreement: z.boolean(),
});

export const loginSchema = z.object({
  username: z.string().min(5, "최소 5자 이상 입력해주세요."),
  password: z.string().min(8, "최소 8자 이상 입력해주세요."),
});

export const consultantSchema = z.object({
  name: z.string().min(2, { message: "올바른 이름을 입력해 주세요" }).trim(),
  phoneNumber: z
    .string()
    .length(13, { message: "올바른 전화번호를 입력해 주세요" })
    .trim()
    .regex(/^[0-9\-]+$/, {
      message: "올바른 전화번호를 입력해 주세요",
    }),
  active: z.boolean(),
});

export const adminPasswordSchema = z
  .object({
    password: z.string().min(8, "최소 8자 이상 입력해주세요."),
    confirmPassword: z.string().min(8, "최소 8자 이상 입력해주세요."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

export const nextConsultantSchema = z.object({
  id: z.coerce
    .number({
      required_error: "올바른 상담원 ID를 입력해 주세요",
    })
    .min(1, { message: "올바른 상담원 ID를 입력해 주세요" }),
});

export default formSchema;
