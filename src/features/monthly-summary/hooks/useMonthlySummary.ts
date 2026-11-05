import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { ExpenseDTO } from "@/features/expense/types/expense.type";
import { getMonthlySummaryData } from "../services/monthlySummary.service";

export function useMonthlySummary(month: Date, retry: number) {
  const [expenses, setExpenses] = useState<ExpenseDTO[]>([]);
  const [previousTotal, setPreviousTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [loadedMonth, setLoadedMonth] = useState("");
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const monthKey = `${year}-${monthIndex}`;

  useFocusEffect(useCallback(() => {
    let active = true;
    setLoading(true);
    setError(false);
    setExpenses([]);

    getMonthlySummaryData(new Date(year, monthIndex, 1))
      .then((data) => {
        if (!active) return;
        setExpenses(data.expenses);
        setPreviousTotal(data.previousTotal);
        setLoadedMonth(monthKey);
      })
      .catch(() => {
        if (!active) return;
        setExpenses([]);
        setError(true);
        setLoadedMonth(monthKey);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => { active = false; };
  }, [year, monthIndex, monthKey, retry]));

  return {
    expenses: loadedMonth === monthKey ? expenses : [],
    previousTotal: loadedMonth === monthKey ? previousTotal : 0,
    loading: loading || loadedMonth !== monthKey,
    error: loadedMonth === monthKey && error,
  };
}
