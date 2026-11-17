import { z } from "zod";

export const editProfileSchema =
  z.object({
    name: z.string().trim().min(1, "Informe seu nome."),
    email: z.string().trim().email("Informe um e-mail válido."),
  });

export type EditProfileFormData =
  z.infer<typeof editProfileSchema>;