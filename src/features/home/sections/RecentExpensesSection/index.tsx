import { View, Pressable } from "react-native";
import Typography from "@/components/Typography/Typography";
import { ExpenseDTO } from "@/features/expense/types/expense.type";
import { useTheme } from "@/theme/ThemeProvider";
import ExpenseItem from "../ExpenseItem";
import { styles as stylesRecentExpensesSection } from "./styles";

export default function RecentExpensesSection({ expenses, onSeeAll }: { expenses: ExpenseDTO[]; onSeeAll: () => void }) {
  const theme = useTheme();
  const styles = stylesRecentExpensesSection(theme);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography variant="h2">Gastos recentes</Typography>
        <Pressable onPress={onSeeAll} accessibilityRole="button" accessibilityLabel="Ver todos os gastos" style={styles.link}>
          <Typography color={theme.colors.primary} variant="body2">Ver todos</Typography>
        </Pressable>
      </View>
      <View style={styles.list}>
        {expenses.length === 0 ? <Typography>Nenhum gasto registrado neste mês.</Typography> : expenses.map((expense, index) => (
          <ExpenseItem key={expense.id ?? index} description={expense.description}
            amount={Number(expense.amount).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            date={new Date(`${expense.date.slice(0, 10)}T12:00:00`).toLocaleDateString("pt-BR")} />
        ))}
      </View>
    </View>
  );
}
