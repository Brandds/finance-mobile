import { useCallback, useRef, useState } from "react";
import { View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Typography from "@/components/Typography/Typography";
import { Button } from "@/components/Button/Button";
import { SkeletonSummaryCard } from "@/components/Skeleton";
import { useTheme } from "@/theme/ThemeProvider";
import { filterExpenses } from "@/features/expense/services/expense.service";
import { ExpenseDTO } from "@/features/expense/types/expense.type";
import { formatExpenseList } from "@/features/expense/helper/expense.helper";
import { expenseError } from "@/features/expense/helper/expenseError";
import ExpenseItem from "../ExpenseItem";
import { styles as stylesRecentExpensesSection } from "./styles";

export default function RecentExpensesSection() {
  const [expenses, setExpenses] = useState<ExpenseDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  const request = useRef(0);
  const theme = useTheme();
  const styles = stylesRecentExpensesSection(theme);

  useFocusEffect(useCallback(() => {
    const current = ++request.current;
    setLoading(true);
    setError(null);
    filterExpenses({ page: 0, size: 5, sort: "id,desc" }).then(result => {
      if (current === request.current) setExpenses(result.data.content);
    }).catch(error => {
      if (current === request.current) setError(expenseError(error));
    }).finally(() => { if (current === request.current) setLoading(false); });
    return () => { ++request.current; };
  }, [attempt]));

  return (
    <View style={styles.container}>
      <Typography variant="h2">Gastos Recentes</Typography>
      <View style={styles.list}>
        {loading ? <SkeletonSummaryCard /> : error ? (
          <>
            <Typography color={theme.colors.error}>{error}</Typography>
            <Button title="Tentar novamente" onPress={() => setAttempt(value => value + 1)} />
          </>
        ) : expenses.length === 0 ? <Typography>Nenhuma despesa registrada</Typography> : (
          formatExpenseList(expenses).map(item => (
            <ExpenseItem key={item.id} description={item.description} amount={item.amountText} date={item.dateText} icon="payments" />
          ))
        )}
      </View>
    </View>
  );
}
