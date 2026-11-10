import { z } from "zod";

export const categorySearchSchema = z.object({
  search: z
    .string()
    .trim(),
});

export type CategorySearchFormData = z.infer<
  typeof categorySearchSchema
>;
