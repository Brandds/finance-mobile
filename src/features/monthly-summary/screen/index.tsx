import { Icon } from "@/components";
import Screen from "@/components/Screen/Screen";
import SummaryCard from "@/components/SummaryCard";
import { categoriesMock } from "@/mocks/categoriesMock";
import { useTheme } from "@/theme/ThemeProvider";
import CategorySummarySection from "../components/CategorySummarySection";
import InsightCard from "@/components/InsightCard";
import AppHeader from "@/components/AppHeader";


export default function MonthlySummaryScreen() {
    const theme = useTheme();

    return(
        <Screen scrollable>
            <AppHeader/>
            <SummaryCard
                title="Gasto Total no Período"
                subTitle="R$ 4.285,40"
                info="12% menos que mês passado"
            >
                <Icon
                    name="trending-down"
                    library="material"
                    size={16}
                    color={theme.colors.onSecondary}
                />
            </SummaryCard>
            
            <CategorySummarySection
                categories={categoriesMock}
            />
            <InsightCard

                description="
                Você economizou R$ 450,00 em alimentação
                comparado à sua média anual.
                "

            />
        </Screen>       
    );
}