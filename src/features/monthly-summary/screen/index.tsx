import { Icon } from "@/components";
import Screen from "@/components/Screen/Screen";
import SummaryCard from "@/components/SummaryCard";
import { categoriesMock } from "@/mocks/categoriesMock";
import { useTheme } from "@/theme/ThemeProvider";
import CategorySummarySection from "../components/CategorySummarySection";


export default function MonthlySummaryScreen() {
    const theme = useTheme();

    return(
        <Screen scrollable>
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
        </Screen>       
    );
}