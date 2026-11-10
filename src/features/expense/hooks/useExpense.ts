import { useCallback, useRef, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { ApiResponse } from "@/shared/types/apiResponse";
import { getDefaultDateRange, normalizeExpenseResponse } from "../helper/expense.helper";
import { getExpenseAnalysis, filterExpenses } from "../services/expense.service";
import { expenseError } from "../helper/expenseError";
import { ExpenseAnalysisDTO, ExpenseDTO, ExpensePage, ExpenseFilterParams } from "../types/expense.type";

export function useExpense(startDate?: string, endDate?: string, filters?: ExpenseFilterParams) {
  const [expenses, setExpenses] = useState<ExpenseDTO[]>([]);
  const [expenseAnalysis, setExpenseAnalysis] = useState<ExpenseAnalysisDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const request = useRef(0);

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
    const current = ++request.current;
    try {
      setLoading(true);
      setError(null);

      const range = getDefaultDateRange();
      const currentStartDate = startDate ?? range.startDate;
      const currentEndDate = endDate ?? range.endDate;

      const expensesPromise = filterExpenses({
        ...filters,
        ...(!filters?.periodType ? {
          startDate: currentStartDate,
          endDate: currentEndDate,
        } : {}),
        sort: "date,desc",
      });

      const [expensesResponse, analysisResponse] = await Promise.allSettled([
        expensesPromise,
        getExpenseAnalysis(currentStartDate, currentEndDate),
      ]);

      if (current !== request.current) return;
      if (expensesResponse.status === "rejected") setError(expenseError(expensesResponse.reason));

      handleExpensesResponse(expensesResponse);
      handleAnalysisResponse(analysisResponse);
    } catch (error) {
      if (current !== request.current) return;
      setError(expenseError(error));
      setExpenses([]);
      setExpenseAnalysis(null);
    } finally {
      if (current === request.current) setLoading(false);
    }
  }, [endDate, startDate, filters]);

  useFocusEffect(useCallback(() => {
    void fetchExpenses();
    return () => { ++request.current; };
  }, [fetchExpenses]));

  return {
    expenses,
    expenseAnalysis,
    loading,
    error,
    refetch: fetchExpenses,
  };
}

