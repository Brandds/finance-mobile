import { z } from "zod";

export const editProfileSchema =
  z.object({
    name: z.string(),
    email: z.string().email(),
  });

export type EditProfileFormData =
  z.infer<typeof editProfileSchema>;