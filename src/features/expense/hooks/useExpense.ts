import { useCallback, useEffect, useState } from "react";

import { getDefaultDateRange, normalizeExpenseResponse } from "../helper/expense.helper";
import { getByDateRange } from "../services/expense.service";
import { ExpenseDTO } from "../types/expense.type";

export function useExpense(startDate?: string, endDate?: string) {
  const [expenses, setExpenses] = useState<ExpenseDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchExpenses = useCallback(async () => {
    try {
      setLoading(true);

      const range = getDefaultDateRange();
      const currentStartDate = startDate ?? range.startDate;
      const currentEndDate = endDate ?? range.endDate;

      const response = await getByDateRange(currentStartDate, currentEndDate);
      const normalizedExpenses = normalizeExpenseResponse(response?.data);

      setExpenses(normalizedExpenses);
    } catch (error) {
      setExpenses([]);
    } finally {
      setLoading(false);
    }
  }, [endDate, startDate]);

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  return {
    expenses,
    loading,
    refetch: fetchExpenses,
  };
}
