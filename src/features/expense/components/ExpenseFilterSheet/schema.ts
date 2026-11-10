import { z } from "zod";
import { PeriodType } from "../../types/expense.type";

const amountSchema = z.string().trim().refine(
  value => value === "" || (/^\d+(?:[.,]\d+)?$/.test(value) && Number.isFinite(Number(value.replace(",", ".")))),
  "Informe um valor válido maior ou igual a zero",
).optional();

export const expenseFilterSchema = z
  .object({
    periodType: z.nativeEnum(PeriodType).optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    minAmount: amountSchema,
    maxAmount: amountSchema,
    categoryIds: z.array(z.number().int().positive()).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.periodType === PeriodType.CUSTOM) {
      if (!data.startDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Obrigatório",
          path: ["startDate"],
        });
      }
      if (!data.endDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Obrigatório",
          path: ["endDate"],
        });
      }
      for (const field of ["startDate", "endDate"] as const) {
        const value = data[field];
        if (value && !z.iso.date().safeParse(value).success) {
          ctx.addIssue({ code: "custom", message: "Informe uma data válida (YYYY-MM-DD)", path: [field] });
        }
      }
      if (data.startDate && data.endDate && z.iso.date().safeParse(data.startDate).success
        && z.iso.date().safeParse(data.endDate).success && data.startDate > data.endDate) {
        ctx.addIssue({ code: "custom", message: "Data final deve ser igual ou posterior à inicial", path: ["endDate"] });
      }
    }

    if (data.minAmount && data.maxAmount) {
      const min = Number(data.minAmount.replace(",", "."));
      const max = Number(data.maxAmount.replace(",", "."));
      if (!isNaN(min) && !isNaN(max) && min > max) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Mínimo maior que o máximo",
          path: ["minAmount"],
        });
      }
    }
  });

export type ExpenseFilterFormData = z.infer<typeof expenseFilterSchema>;
