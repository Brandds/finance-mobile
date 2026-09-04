import { z } from "zod";
import { PeriodType } from "../../types/expense.type";

export const expenseFilterSchema = z
  .object({
    periodType: z.nativeEnum(PeriodType).optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    minAmount: z.string().optional(),
    maxAmount: z.string().optional(),
    categoryIds: z.array(z.number()).optional(),
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
    }

    if (data.minAmount !== undefined && data.maxAmount !== undefined) {
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
