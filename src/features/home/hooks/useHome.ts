import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { listCategories } from "@/features/category/services/category.service";
import { Category } from "@/features/category/types";
import { getMonthDateRange } from "@/features/expense/helper/expense.helper";
import { filterExpenses, getExpenseAnalysis } from "@/features/expense/services/expense.service";
import { ExpenseAnalysisDTO, ExpenseDTO } from "@/features/expense/types/expense.type";

export function useHome() {
  const [data, setData] = useState<{ analysis: ExpenseAnalysisDTO; categories: Category[]; expenses: ExpenseDTO[] } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retry, setRetry] = useState(0);
  useFocusEffect(useCallback(() => {
    let active = true;
    setLoading(true);
    setError(false);
    setData(null);
    const range = getMonthDateRange(new Date());
    Promise.all([
      getExpenseAnalysis(range.startDate, range.endDate),
      listCategories(),
      filterExpenses({ ...range, page: 0, size: 5, sort: "date,desc" }),
    ]).then(([analysis, categories, expenses]) => {
      if (!analysis.data || !Number.isFinite(analysis.data.totalSpent) || !Array.isArray(categories) || !Array.isArray(expenses.data?.content)) {
        throw new Error("Resposta da Home inválida.");
      }
      if (active) setData({ analysis: analysis.data, categories, expenses: expenses.data.content });
    }).catch(() => { if (active) setError(true); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [retry]));
  return { data, loading, error, refetch: () => setRetry((value) => value + 1) };
}
