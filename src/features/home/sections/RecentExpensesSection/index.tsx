import { Pressable, View } from "react-native";
import Typography from "@/components/Typography/Typography";
import { useTheme } from "@/theme/ThemeProvider";
import { ExpenseDTO } from "@/features/expense/types/expense.type";
import { formatExpenseList } from "@/features/expense/helper/expense.helper";
import ExpenseItem from "../ExpenseItem";
import { styles as stylesRecentExpensesSection } from "./styles";

type Props = { expenses: ExpenseDTO[]; onSeeAll: () => void };

export default function RecentExpensesSection({ expenses, onSeeAll }: Props) {
  const theme = useTheme();
  const styles = stylesRecentExpensesSection(theme);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography variant="h2">Gastos Recentes</Typography>
        <Pressable onPress={onSeeAll} accessibilityRole="button" accessibilityLabel="Ver todos os gastos" style={styles.link}>
          <Typography variant="body2" color={theme.colors.primary}>Ver todos</Typography>
        </Pressable>
      </View>
      <View style={styles.list}>
        {expenses.length === 0 ? <Typography>Nenhuma despesa registrada</Typography> : (
          formatExpenseList(expenses).map(item => (
            <ExpenseItem key={item.id} description={item.description} amount={item.amountText} date={item.dateText} icon="payments" />
          ))
        )}
      </View>
    </View>
  );
}

