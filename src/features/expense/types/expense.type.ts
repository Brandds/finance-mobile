export interface ExpenseDTO {
  id: number | null;
  description: string;
  amount: number;
  date: string;
  userId: number | null;
  categoryId: number | null;
  accountId: number | null;
  categoryName: string | null;
}

export interface ExpensePage<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface ExpenseAnalysisDTO {
  previousPeriodTotal?: number;
  percentageChange?: number;
  totalSpent?: number;
}

export enum PeriodType {
  TODAY = "TODAY",
  LAST_7_DAYS = "LAST_7_DAYS",
  CURRENT_MONTH = "CURRENT_MONTH",
  CUSTOM = "CUSTOM"
}

export interface ExpenseFilterParams {
  categoryIds?: number[];
  periodType?: PeriodType | string;
  startDate?: string;
  endDate?: string;
  minAmount?: number;
  maxAmount?: number;
  page?: number;
  size?: number;
  sort?: string;
}
