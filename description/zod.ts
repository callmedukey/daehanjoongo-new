import { z } from "zod";

const formSchema = z
  .object({
    car: z.string().min(1, { message: "차량명을 입력해 주세요" }).trim(),
    phone2: z
      .string()
      .length(4, { message: "4자리를 입력해 주세요." })
      .regex(/^[0-9]+$/, { message: "숫자만 입력해 주세요." }),
    phone3: z
      .string()
      .length(4, { message: "4자리를 입력해 주세요." })
      .regex(/^[0-9]+$/, { message: "숫자만 입력해 주세요." }),
    agreement: z.boolean(),
  })
  .refine(
    (data) => {
      const phone = `010-${data.phone2}-${data.phone3}`;
      // Basic check for 010-XXXX-XXXX format length
      return phone.length === 13;
    },
    {
      message: "올바른 전화번호 형식(010-XXXX-XXXX)을 입력해 주세요.",
      // Path specifies which field gets the error, but it's a combined validation.
      // Let's assign it arbitrarily to phone2 for now, or consider a global error.
      path: ["phone2"],
    }
  );

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
