import { z } from "zod";
import { categoryIcons } from "../../types";
export const categorySchema = z.object({
  name: z.string().trim().min(1, "Informe o nome da categoria."),
  icon: z.enum(Object.keys(categoryIcons) as [keyof typeof categoryIcons, ...(keyof typeof categoryIcons)[]]).nullable(),
});
export type CategoryFormData = z.infer<typeof categorySchema>;
