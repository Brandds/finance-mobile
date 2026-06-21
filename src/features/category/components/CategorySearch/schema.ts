import { z } from "zod";

export const categorySearchSchema = z.object({
  search: z
    .string()
    .min(4,"Mínimo de 6 caracteres"),
});

export type CategorySearchFormData = z.infer<
  typeof categorySearchSchema
>;