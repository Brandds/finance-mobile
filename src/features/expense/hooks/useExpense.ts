import { useCallback, useEffect, useState } from "react";

import { ApiResponse } from "@/shared/types/apiResponse";
import { getDefaultDateRange, normalizeExpenseResponse } from "../helper/expense.helper";
import { getByDateRange, getExpenseAnalysis } from "../services/expense.service";
import { ExpenseAnalysisDTO, ExpenseDTO, ExpensePage } from "../types/expense.type";

export function useExpense(startDate?: string, endDate?: string) {
  const [expenses, setExpenses] = useState<ExpenseDTO[]>([]);
  const [expenseAnalysis, setExpenseAnalysis] = useState<ExpenseAnalysisDTO | null>(null);
  const [loading, setLoading] = useState(true);

  const handleExpensesResponse = (
    response: PromiseSettledResult<ApiResponse<ExpensePage<ExpenseDTO>>>,
  ) => {
    if (response.status === "fulfilled") {
      const normalizedExpenses = normalizeExpenseResponse(response.value?.data);
      setExpenses(normalizedExpenses);
      return;
    }

    setExpenses([]);
  };

  const handleAnalysisResponse = (
    response: PromiseSettledResult<ApiResponse<ExpenseAnalysisDTO>>,
  ) => {
    if (response.status === "fulfilled") {
      setExpenseAnalysis(response.value?.data ?? null);
      return;
    }

    setExpenseAnalysis(null);
  };

  const fetchExpenses = useCallback(async () => {
    try {
      setLoading(true);

      const range = getDefaultDateRange();
      const currentStartDate = startDate ?? range.startDate;
      const currentEndDate = endDate ?? range.endDate;

      const [expensesResponse, analysisResponse] = await Promise.allSettled([
        getByDateRange(currentStartDate, currentEndDate),
        getExpenseAnalysis(currentStartDate, currentEndDate),
      ]);

      handleExpensesResponse(expensesResponse);
      handleAnalysisResponse(analysisResponse);
    } catch (error) {
      setExpenses([]);
      setExpenseAnalysis(null);
    } finally {
      setLoading(false);
    }
  }, [endDate, startDate]);

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  return {
    expenses,
    expenseAnalysis,
    loading,
    refetch: fetchExpenses,
  };
}
