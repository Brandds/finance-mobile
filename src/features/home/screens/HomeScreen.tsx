import { View } from "react-native";

import Screen from "@/components/Screen/Screen";
import { stylesHome } from "../styles/home.styles";
import HomeHeader from "../sections/HomeHeader";
import SummaryCard from "../sections/SummaryCard";
import CategoriesSection from "../sections/CategoriesSection";
import RecentExpensesSection from "../sections/RecentExpensesSection";
import FloatingButton from "../sections/FloatingButton";


export default function HomeScreen() {
  return (
    <Screen scrollable>
      <View style={stylesHome.container}>
        {/* Header */}
        <HomeHeader />

        {/* Summary */}
        <SummaryCard />

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