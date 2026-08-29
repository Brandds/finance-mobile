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