import { z } from "zod";

export const editProfileSchema =
  z.object({
    fullName: z.string(),
    email: z.string().email(),
    phone: z.string(),
    cpf: z.string(),
  });

export type EditProfileFormData =
  z.infer<typeof editProfileSchema>;