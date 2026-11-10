import { View } from "react-native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Icon } from "@/components";
import AppHeader from "@/components/AppHeader";
import { Button } from "@/components/Button/Button";
import Screen from "@/components/Screen/Screen";
import { SkeletonSummaryCard, SkeletonExpenseList } from "@/components/Skeleton";
import SummaryCard from "@/components/SummaryCard";
import Typography from "@/components/Typography/Typography";
import { ROUTES } from "@/navigation/routes";
import { BottomTabParamList } from "@/navigation/types/bottom-tabs";
import { useTheme } from "@/theme/ThemeProvider";
import { useHome } from "../hooks/useHome";
import CategoriesSection from "../sections/CategoriesSection";
import FloatingButton from "../sections/FloatingButton";
import RecentExpensesSection from "../sections/RecentExpensesSection";
import { stylesHome } from "../styles/home.styles";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/types/root-stack";


export default function HomeScreen() {
  const navigation = useNavigation<CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList, typeof ROUTES.HOME>,
    NativeStackNavigationProp<RootStackParamList>
  >>();
  const theme = useTheme();
  const styles = stylesHome(theme);
  const { data, loading, error, refetch } = useHome();
  const change = data?.analysis.percentageChange;
  const trend = change == null || !Number.isFinite(change) ? "Comparação indisponível"
    : change === 0 ? "Mesmo total do mês passado"
    : `${Math.abs(change).toLocaleString("pt-BR", { maximumFractionDigits: 2 })}% ${change > 0 ? "maior" : "menor"} que mês passado`;
  return (
    <Screen scrollable>
      <View style={styles.container}>
        <AppHeader />
        {loading ? <><SkeletonSummaryCard /><SkeletonExpenseList quantity={5} /></>
          : error ? <View accessibilityLiveRegion="polite"><Typography>Não foi possível carregar a Home.</Typography><Button title="Tentar novamente" onPress={refetch} /></View>
          : data ? <>
            <SummaryCard title="Total gasto no mês" subTitle={Number(data.analysis.totalSpent).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} info={trend}>
              <Icon name={change == null || change === 0 ? "trending-flat" : change > 0 ? "trending-up" : "trending-down"} size={16} color={theme.colors.onPrimary} />
            </SummaryCard>
            <CategoriesSection categories={data.categories} onSeeAll={() => navigation.navigate(ROUTES.CATEGORIAS)} />
            <RecentExpensesSection expenses={data.expenses} onSeeAll={() => navigation.navigate(ROUTES.EXPENSES)} />
          </> : null}
      </View>

      {/* Floating Action Button */}
      <FloatingButton onPress={() => navigation.navigate(ROUTES.ADD_EXPENSE)} />

    </Screen>
  );
}
