import { useCallback, useEffect, useState } from "react";

import { ApiResponse } from "@/shared/types/apiResponse";
import { getDefaultDateRange, normalizeExpenseResponse } from "../helper/expense.helper";
import { getByDateRange, getExpenseAnalysis, filterExpenses } from "../services/expense.service";
import { ExpenseAnalysisDTO, ExpenseDTO, ExpensePage, ExpenseFilterParams } from "../types/expense.type";
import { useToast } from "@/hooks/useToasts";
import { toastMessages, toastTitles } from "@/constants/toast.constants";

export function useExpense(startDate?: string, endDate?: string, filters?: ExpenseFilterParams) {
  const [expenses, setExpenses] = useState<ExpenseDTO[]>([]);
  const [expenseAnalysis, setExpenseAnalysis] = useState<ExpenseAnalysisDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();

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

  const handleExpenseToast = (
    response: PromiseSettledResult<ApiResponse<ExpensePage<ExpenseDTO>>>,
    hasFilters: boolean,
  ) => {
    if (response.status === "fulfilled") {
      const defaultMsg = hasFilters ? toastMessages.FILTRO_APLICADO : toastMessages.DESPESAS_CARREGADAS;
      const title = hasFilters ? toastTitles.FILTRO_APLICADO : toastTitles.SUCESSO;

      showToast({
        title,
        message: response.value?.message || defaultMsg,
        type: "success",
      });
      return;
    }

    const defaultErrorMsg = hasFilters ? toastMessages.ERRO_FILTRAR : toastMessages.ERRO_CARREGAR_DESPESAS;
    const errorTitle = hasFilters ? toastTitles.ERRO_FILTRAR : toastTitles.ERRO;

    showToast({
      title: errorTitle,
      message: defaultErrorMsg,
      type: "error",
    });
  };

  const fetchExpenses = useCallback(async () => {
    const hasFilters = Boolean(filters && Object.keys(filters).length > 0);

    try {
      setLoading(true);

      const range = getDefaultDateRange();
      const currentStartDate = startDate ?? range.startDate;
      const currentEndDate = endDate ?? range.endDate;

      const expensesPromise = hasFilters 
        ? filterExpenses(filters!)
        : getByDateRange(currentStartDate, currentEndDate);

      const [expensesResponse, analysisResponse] = await Promise.allSettled([
        expensesPromise,
        getExpenseAnalysis(currentStartDate, currentEndDate),
      ]);

      handleExpenseToast(expensesResponse, hasFilters);
      handleExpensesResponse(expensesResponse);
      handleAnalysisResponse(analysisResponse);
    } catch (error) {
      showToast({
        title: hasFilters ? toastTitles.ERRO_FILTRAR : toastTitles.ERRO,
        message: hasFilters ? toastMessages.ERRO_FILTRAR : toastMessages.ERRO_CARREGAR_DESPESAS,
        type: "error",
      });
      setExpenses([]);
      setExpenseAnalysis(null);
    } finally {
      setLoading(false);
    }
  }, [endDate, startDate, filters, showToast]);

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




