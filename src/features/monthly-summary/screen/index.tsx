import { useMemo, useState } from "react";
import { TouchableOpacity } from "react-native";

import { Icon } from "@/components";
import AppHeader from "@/components/AppHeader";
import InsightCard from "@/components/InsightCard";
import Screen from "@/components/Screen/Screen";
import { SkeletonBlock } from "@/components/Skeleton";
import SummaryCard from "@/components/SummaryCard";
import Typography from "@/components/Typography/Typography";
import { useTheme } from "@/theme/ThemeProvider";
import CategorySummarySection from "../components/CategorySummarySection";
import PeriodHeader from "../components/PeriodHeader";
import { buildMonthlySummary, formatMoney } from "../helpers/monthlySummary.helper";
import { useMonthlySummary } from "../hooks/useMonthlySummary";
import { styles as screenStyles } from "./styles";

export default function MonthlySummaryScreen() {
  const theme = useTheme();
  const styles = screenStyles(theme);
  const [selectedMonth, setSelectedMonth] = useState(() => new Date());
  const [retry, setRetry] = useState(0);
  const { expenses, previousTotal, loading, error } = useMonthlySummary(selectedMonth, retry);
  const summary = useMemo(
    () => buildMonthlySummary(expenses, previousTotal, theme.colors.secondary),
    [expenses, previousTotal, theme.colors.secondary],
  );
  const period = new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric" }).format(selectedMonth);

  const changeMonth = (direction: number) => {
    setSelectedMonth((current) => new Date(current.getFullYear(), current.getMonth() + direction, 1));
  };

  return (
    <Screen scrollable>
      <AppHeader />
      <PeriodHeader
        title="Resumo mensal"
        period={period.charAt(0).toUpperCase() + period.slice(1)}
        onPrevious={() => changeMonth(-1)}
        onNext={() => changeMonth(1)}
      />

      {error ? (
        <TouchableOpacity
          style={styles.error}
          onPress={() => setRetry((value) => value + 1)}
          accessibilityRole="button"
          accessibilityLabel="Erro ao carregar resumo mensal. Tentar novamente"
        >
          <Typography variant="body1" color={theme.colors.error}>
            Não foi possível carregar o resumo. Toque para tentar novamente.
          </Typography>
        </TouchableOpacity>
      ) : (
        <>
          {loading ? (
            <SkeletonBlock width="100%" height={130} borderRadius={theme.radius.md} />
          ) : (
            <SummaryCard
              title="Gasto total no período"
              subTitle={formatMoney(summary.totalCents)}
              info={summary.trend}
            >
              <Icon
                name={previousTotal === 0 ? "trending-flat" : summary.difference > 0 ? "trending-up" : summary.difference < 0 ? "trending-down" : "trending-flat"}
                library="material"
                size={16}
                color={theme.colors.onPrimary}
              />
            </SummaryCard>
          )}

          <CategorySummarySection categories={summary.categories} loading={loading} />
          {!loading && <InsightCard description={summary.insight} />}
        </>
      )}
    </Screen>
  );
}
