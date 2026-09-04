import { PeriodType, ExpenseFilterParams } from "../types/expense.type";
import { ExpenseFilterFormData } from "../components/ExpenseFilterSheet/schema";

export const PERIOD_OPTIONS = [
  { label: "Hoje", value: PeriodType.TODAY },
  { label: "Últimos 7 dias", value: PeriodType.LAST_7_DAYS },
  { label: "Mês atual", value: PeriodType.CURRENT_MONTH },
  { label: "Personalizado", value: PeriodType.CUSTOM },
];

export const DEFAULT_FILTER_FORM_VALUES: ExpenseFilterFormData = {
  categoryIds: [],
  periodType: undefined,
  minAmount: undefined,
  maxAmount: undefined,
  startDate: undefined,
  endDate: undefined,
};

export function formatDateMask(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 8);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

export function parseDateToIso(dateStr?: string): string | undefined {
  if (!dateStr || dateStr.length !== 10) return undefined;
  const parts = dateStr.split("/");
  if (parts.length !== 3) return undefined;
  const [day, month, year] = parts;
  if (!day || !month || !year || year.length !== 4) return undefined;
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

export function formatCurrencyMask(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";
  const numberValue = Number(digits) / 100;
  return numberValue.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function parseCurrencyToNumber(value?: string): number | undefined {
  if (!value) return undefined;
  const cleanStr = value.replace(/\./g, "").replace(",", ".");
  const num = Number(cleanStr);
  return isNaN(num) ? undefined : num;
}

export function parseFilterFormDataToParams(
  data: ExpenseFilterFormData
): ExpenseFilterParams {
  return {
    categoryIds: data.categoryIds,
    periodType: data.periodType,
    startDate: data.periodType === PeriodType.CUSTOM ? parseDateToIso(data.startDate) : undefined,
    endDate: data.periodType === PeriodType.CUSTOM ? parseDateToIso(data.endDate) : undefined,
    minAmount: parseCurrencyToNumber(data.minAmount),
    maxAmount: parseCurrencyToNumber(data.maxAmount),
  };
}

export function toggleCategoryId(currentIds: number[], targetId: number): number[] {
  if (currentIds.includes(targetId)) {
    return currentIds.filter((id) => id !== targetId);
  }
  return [...currentIds, targetId];
}

