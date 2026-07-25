import { View } from "react-native";


import { useTheme } from "@/theme/ThemeProvider";
import Screen from "@/components/Screen/Screen";
import AppHeader from "@/components/AppHeader";
import MonthHeader from "../components/MonthHeader";
import SummaryCard from "@/components/SummaryCard";
import { Icon } from "@/components";
import { styles as expensesStyles }  from "../styles/expense.style";
import ExpenseSection from "../components/ExpenseSection";
import ExpenseItem from "@/features/home/sections/ExpenseItem";

export default function ExpensesScreen() {
  const theme = useTheme();
  const styles = expensesStyles(theme);

  return (
    <Screen scrollable>
      <AppHeader />

      <MonthHeader
        selectedMonth={new Date()}
        onMonthPress={() => {alert("Month pressed")}}
        onFilterPress={() => {alert("Filter pressed")}}
        onSearchPress={() => {alert("Search pressed")}}
      />

      <SummaryCard
        title="Total gasto no mês"
        subTitle="R$ 4.280,50"
        info="8% menor que mês passado"
      >
        <Icon
          name="trending-down"
          size={16}
          color="#FFFFFF"
        />
      </SummaryCard>

      <View style={styles.listContainer}>
        <ExpenseSection
            title="Hoje"
            total="R$ 158,00"
        >
            <ExpenseItem
                description="Almoço Executivo"
                amount="-R$ 42,00"
                date="09:30"
                icon="restaurant"
            />

            <ExpenseItem
                description="Uber"
                amount="-R$ 116,00"
                date="12:10"
                icon="directions-car"
            />
        </ExpenseSection>
      </View>
    </Screen>
  );
}