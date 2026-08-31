import { View } from "react-native";

import { Icon } from "@/components";
import AppHeader from "@/components/AppHeader";
import Screen from "@/components/Screen/Screen";
import { SkeletonBlock } from "@/components/Skeleton";
import SummaryCard from "@/components/SummaryCard";
import ExpenseItem from "@/features/home/sections/ExpenseItem";
import { useTheme } from "@/theme/ThemeProvider";
import ExpenseSection from "../components/ExpenseSection";
import MonthHeader from "../components/MonthHeader";
import {
  formatCurrencyValue,
  formatExpenseList,
  sumExpensesByDate,
} from "../helper/expense.helper";
import { useExpense } from "../hooks/useExpense";
import { styles as expensesStyles } from "../styles/expense.style";

export default function ExpensesScreen() {
  const { expenses, expenseAnalysis, loading } = useExpense();
  const theme = useTheme();
  const styles = expensesStyles(theme);

  const formattedExpenses = formatExpenseList(expenses);
  const todayTotal = sumExpensesByDate(expenses, new Date());
  const todayTotalText = formatCurrencyValue(todayTotal);

  return (
    <Screen scrollable>
      <AppHeader />

      <MonthHeader
        selectedMonth={new Date()}
        onMonthPress={() => {
          alert("Month pressed");
        }}
        onFilterPress={() => {
          alert("Filter pressed");
        }}
        onSearchPress={() => {
          alert("Search pressed");
        }}
      />

      {loading ? (
        <SkeletonBlock width="100%" height={130} borderRadius={theme.radius.md} />
      ) : (
        <SummaryCard
          title="Total gasto no mês"
          subTitle={expenseAnalysis?.totalSpent ? formatCurrencyValue(expenseAnalysis.totalSpent) : "R$ 0,00"}
          info={expenseAnalysis?.percentageChange !== undefined ? `${expenseAnalysis.percentageChange.toFixed(2)}% menor que mês passado` : "Nenhuma informação disponível"}
        >
          <Icon name="trending-down" size={16} color="#FFFFFF" />
        </SummaryCard>
      )}

      <View style={styles.listContainer}>
        {loading ? (
          <SkeletonBlock width="100%" height={130} borderRadius={theme.radius.md} />
        ) : (
          <ExpenseSection title="Hoje" total={todayTotalText}>
            {formattedExpenses.length > 0 ? (
              formattedExpenses.map((expense) => (
                <ExpenseItem
                  key={expense.id ?? `${expense.description}-${expense.date}`}
                  description={expense.categoryName ?? expense.description}
                  amount={expense.amountText}
                  date={expense.dateText}
                  icon={expense.categoryName ? "restaurant" : "payments"}
                />
              ))
            ) : (
              <ExpenseItem
                description="Nenhuma despesa registrada"
                amount="-R$ 0,00"
                date="-"
              />
            )}
          </ExpenseSection>
        )}
      </View>
    </Screen>
  );
}
