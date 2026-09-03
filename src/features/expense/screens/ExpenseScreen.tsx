import { useRef, useState } from "react";
import { View } from "react-native";
import { AppBottomSheetRef } from "@/components/BottomSheet/types";

import { Icon } from "@/components";
import AppHeader from "@/components/AppHeader";
import Screen from "@/components/Screen/Screen";
import { SkeletonBlock } from "@/components/Skeleton";
import SummaryCard from "@/components/SummaryCard";
import ExpenseItem from "@/features/home/sections/ExpenseItem";
import { useTheme } from "@/theme/ThemeProvider";
import ExpenseSection from "../components/ExpenseSection";
import MonthHeader from "../components/MonthHeader";
import MonthPickerSheet from "../components/MonthPickerSheet";
import ExpenseFilterSheet from "../components/ExpenseFilterSheet";
import { ExpenseFilterFormData } from "../components/ExpenseFilterSheet/schema";
import {
  formatCurrencyValue,
  formatExpenseList,
  getMonthDateRange,
  sumExpensesByDate,
} from "../helper/expense.helper";
import { useExpense } from "../hooks/useExpense";
import { styles as expensesStyles } from "../styles/expense.style";

export default function ExpensesScreen() {
  const theme = useTheme();
  const styles = expensesStyles(theme);

  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [filters, setFilters] = useState<ExpenseFilterFormData | undefined>(undefined);
  const bottomSheetRef = useRef<AppBottomSheetRef>(null);
  const filterSheetRef = useRef<AppBottomSheetRef>(null);

  const { startDate, endDate } = getMonthDateRange(selectedMonth);
  const { expenses, expenseAnalysis, loading } = useExpense(startDate, endDate, filters);

  const formattedExpenses = formatExpenseList(expenses);
  const todayTotal = sumExpensesByDate(expenses, new Date());
  const todayTotalText = formatCurrencyValue(todayTotal);

  const handleMonthPress = () => {
    bottomSheetRef.current?.present();
  };

  const handleMonthSelect = (date: Date) => {
    setSelectedMonth(date);
    bottomSheetRef.current?.dismiss();
  };

  const handleFilterPress = () => {
    filterSheetRef.current?.present();
  };

  const handleApplyFilters = (newFilters: ExpenseFilterFormData) => {
    setFilters(newFilters);
  };

  return (
    <>
      <Screen scrollable>
        <AppHeader />

        <MonthHeader
          selectedMonth={selectedMonth}
          onMonthPress={handleMonthPress}
          onFilterPress={handleFilterPress}
          onSearchPress={() => {
            alert("Search pressed");
          }}
        />

        {loading ? (
          <SkeletonBlock width="100%" height={130} borderRadius={theme.radius.md} />
        ) : (
          <SummaryCard
            title="Total gasto no mês"
            subTitle={
              expenseAnalysis?.totalSpent
                ? formatCurrencyValue(expenseAnalysis.totalSpent)
                : "R$ 0,00"
            }
            info={
              expenseAnalysis?.percentageChange !== undefined
                ? `${expenseAnalysis.percentageChange.toFixed(2)}% menor que mês passado`
                : "Nenhuma informação disponível"
            }
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

      <MonthPickerSheet
        ref={bottomSheetRef}
        selectedMonth={selectedMonth}
        onSelect={handleMonthSelect}
      />
      
      <ExpenseFilterSheet
        ref={filterSheetRef}
        onApplyFilters={handleApplyFilters}
      />
    </>
  );
}
