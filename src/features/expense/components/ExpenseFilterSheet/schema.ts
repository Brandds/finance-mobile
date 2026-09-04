import { z } from "zod";
import { PeriodType } from "../../types/expense.type";
import { parseCurrencyToNumber, parseDateToIso } from "../../helper/expenseFilter.helper";

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
      if (!data.startDate || data.startDate.length !== 10) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Data inicial inválida (DD/MM/YYYY)",
          path: ["startDate"],
        });
      }
      if (!data.endDate || data.endDate.length !== 10) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Data final inválida (DD/MM/YYYY)",
          path: ["endDate"],
        });
      }

      if (data.startDate?.length === 10 && data.endDate?.length === 10) {
        const isoStart = parseDateToIso(data.startDate);
        const isoEnd = parseDateToIso(data.endDate);
        if (isoStart && isoEnd && isoStart > isoEnd) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Data inicial maior que a final",
            path: ["startDate"],
          });
        }
      }
    }

    if (data.minAmount && data.maxAmount) {
      const min = parseCurrencyToNumber(data.minAmount);
      const max = parseCurrencyToNumber(data.maxAmount);
      if (min !== undefined && max !== undefined && min > max) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Mínimo maior que o máximo",
          path: ["minAmount"],
        });
      }
    }
  });

export type ExpenseFilterFormData = z.infer<typeof expenseFilterSchema>;

