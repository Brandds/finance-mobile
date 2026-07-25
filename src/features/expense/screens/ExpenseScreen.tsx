import { View } from "react-native";


import { useTheme } from "@/theme/ThemeProvider";
import Screen from "@/components/Screen/Screen";
import AppHeader from "@/components/AppHeader";
import MonthHeader from "../components/MonthHeader";
import SummaryCard from "@/components/SummaryCard";
import { Icon } from "@/components";
import { styles as expensesStyles }  from "../styles/expense.style";

export default function ExpensesScreen() {
  const theme = useTheme();
  const styles = expensesStyles(theme);

  return (
    <Screen scrollable>
      <AppHeader />

      <MonthHeader
        selectedMonth={new Date()}
        onMonthPress={() => {}}
        onFilterPress={() => {}}
        onSearchPress={() => {}}
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
        {/* A lista de gastos será implementada na próxima etapa */}
      </View>
    </Screen>
  );
}