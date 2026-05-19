import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, "Nome obrigatório"),

  email: z
    .string()
    .email("E-mail inválido"),

  password: z
    .string()
    .min(8, "Mínimo 8 caracteres"),

  acceptTerms: z.boolean().refine(
    (value) => value === true,
    {
      message: "Aceite os termos",
    }
  ),
});

export type RegisterFormData =
  z.infer<typeof registerSchema>;