import { z } from "zod";

export function parseExpenseAmount(value: string) {
  return Number(value.includes(",") ? value.replace(/\./g, "").replace(",", ".") : value);
}

export function localExpenseDate(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export const createExpenseSchema = z.object({
  description: z.string().trim().min(1, "Informe a descrição").max(255, "Use até 255 caracteres"),
  amount: z.string().trim().refine(value =>
    /^(?:\d+(?:[.,]\d{1,2})?|\d{1,3}(?:\.\d{3})+,\d{1,2})$/.test(value)
      && Number.isFinite(parseExpenseAmount(value)) && parseExpenseAmount(value) > 0
      && Number.isSafeInteger(Math.round(parseExpenseAmount(value) * 100)),
  "Informe um valor maior que zero, com até duas casas decimais"),
  date: z.string().refine(value => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || value.startsWith("0000")) return false;
    const date = new Date(`${value}T12:00:00`);
    return !Number.isNaN(date.getTime()) && localExpenseDate(date) === value;
  }, "Informe uma data válida no formato AAAA-MM-DD"),
  categoryId: z.number().int().positive().nullable(),
  accountId: z.number().int().positive().nullable(),
});

export type CreateExpenseFormData = z.infer<typeof createExpenseSchema>;
