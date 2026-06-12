import { View } from "react-native";

import { Icon } from "@/components";
import Screen from "@/components/Screen/Screen";
import SummaryCard from "../../../components/SummaryCard";
import CategoriesSection from "../sections/CategoriesSection";
import FloatingButton from "../sections/FloatingButton";
import HomeHeader from "../sections/HomeHeader";
import RecentExpensesSection from "../sections/RecentExpensesSection";
import { stylesHome } from "../styles/home.styles";
import { useTheme } from "@/theme/ThemeProvider";


export default function HomeScreen() {
  const theme = useTheme();
  const styles = stylesHome(theme);
  return (
    <Screen scrollable>
      <View style={styles.container}>
        {/* Header */}
        <HomeHeader />

        {/* Summary */}
        <SummaryCard
          title="Total gasto no mês"
          subTitle="R$ 3.450,00"
          info="8% menor que mês passado"            
        >
          <Icon
            name="trending-down"
            size={16}
            color="#FFFFFF"
          />
        </SummaryCard>

        {/* Categories */}
        <CategoriesSection />

        {/* Recent Expenses */}
        <RecentExpensesSection />
      </View>

      {/* Floating Action Button */}
      <FloatingButton />

    </Screen>
  );
}