import { useRef, useState } from "react";
import { View } from "react-native";
import { AppBottomSheetRef } from "@/components/BottomSheet/types";

import { Icon } from "@/components";
import Typography from "@/components/Typography/Typography";
import { Button } from "@/components/Button/Button";
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
import { PERIOD_OPTIONS } from "../components/ExpenseFilterSheet/ExpenseFilterSheet";
import { useCategories } from "@/features/category/hooks/useCategories";
import {
  formatCurrencyValue,
  formatExpenseList,
  getMonthDateRange,
} from "../helper/expense.helper";
import { useExpense } from "../hooks/useExpense";
import { styles as expensesStyles } from "../styles/expense.style";
import { ExpenseFilterParams } from "../types/expense.type";

export default function ExpensesScreen() {
  const theme = useTheme();
  const styles = expensesStyles(theme);

  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [filters, setFilters] = useState<ExpenseFilterParams  | undefined>(undefined);
  const bottomSheetRef = useRef<AppBottomSheetRef>(null);
  const filterSheetRef = useRef<AppBottomSheetRef>(null);
  const { categories, loading: categoriesLoading, error: categoriesError, refetch: refetchCategories } = useCategories();

  const { startDate, endDate } = getMonthDateRange(selectedMonth);
  const { expenses, expenseAnalysis, loading, error, refetch } = useExpense(startDate, endDate, filters);

  const formattedExpenses = formatExpenseList(expenses);
  const activeFilters = [
    PERIOD_OPTIONS.find(option => option.value === filters?.periodType)?.label,
    filters?.startDate && filters?.endDate ? `${filters.startDate} a ${filters.endDate}` : undefined,
    ...(filters?.categoryIds ?? []).map(id => categories.find(category => category.id === id)?.name ?? `Categoria #${id}`),
    filters?.minAmount !== undefined ? `Mínimo: ${formatCurrencyValue(filters.minAmount)}` : undefined,
    filters?.maxAmount !== undefined ? `Máximo: ${formatCurrencyValue(filters.maxAmount)}` : undefined,
  ].filter(Boolean).join(" · ");

  const handleMonthPress = () => {
    bottomSheetRef.current?.present();
  };

  const handleMonthSelect = (date: Date) => {
    setSelectedMonth(date);
    bottomSheetRef.current?.dismiss();
  };

  const handleFilterPress = () => {
    void refetchCategories();
    filterSheetRef.current?.present();
  };

  const handleApplyFilters = (newFilters: ExpenseFilterParams | undefined) => {
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
          {activeFilters ? (
            <Typography color={theme.colors.primary}>Filtros ativos: {activeFilters}</Typography>
          ) : null}
          {error ? (
            <>
              <Typography color={theme.colors.error}>{error}</Typography>
              <Button title="Tentar novamente" onPress={() => void refetch()} />
            </>
          ) : loading ? (
            <SkeletonBlock width="100%" height={130} borderRadius={theme.radius.md} />
          ) : (
            <ExpenseSection title={activeFilters ? "Resultados filtrados" : "Despesas do mês"} total={formatCurrencyValue(expenses.reduce((total, expense) => total + expense.amount, 0))}>
              {formattedExpenses.length > 0 ? (
                formattedExpenses.map((expense) => (
                  <ExpenseItem
                    key={expense.id ?? `${expense.description}-${expense.date}`}
                    description={expense.description}
                    amount={expense.amountText}
                    date={expense.dateText}
                    icon={expense.categoryName ? "restaurant" : "payments"}
                  />
                ))
              ) : (
                <ExpenseItem
                  description={activeFilters ? "Nenhuma despesa encontrada para os filtros" : "Nenhuma despesa registrada no mês"}
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
        filters={filters}
        categories={categories}
        categoriesLoading={categoriesLoading}
        categoriesError={categoriesError}
        onReloadCategories={() => void refetchCategories()}
      />
    </>
  );
}
