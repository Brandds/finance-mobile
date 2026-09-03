import { useCallback, useEffect, useState } from "react";

import { ApiResponse } from "@/shared/types/apiResponse";
import { getDefaultDateRange, normalizeExpenseResponse } from "../helper/expense.helper";
import { getByDateRange, getExpenseAnalysis, filterExpenses } from "../services/expense.service";
import { ExpenseAnalysisDTO, ExpenseDTO, ExpensePage, ExpenseFilterParams } from "../types/expense.type";

export function useExpense(startDate?: string, endDate?: string, filters?: ExpenseFilterParams) {
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

      const hasFilters = filters && Object.keys(filters).length > 0;
      
      const expensesPromise = hasFilters 
        ? filterExpenses(filters!)
        : getByDateRange(currentStartDate, currentEndDate);

      const [expensesResponse, analysisResponse] = await Promise.allSettled([
        expensesPromise,
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
  }, [endDate, startDate, filters]);

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

