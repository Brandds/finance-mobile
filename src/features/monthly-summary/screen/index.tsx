import Screen from "@/components/Screen/Screen";
import Typography from "@/components/Typography/Typography";
import PeriodHeader from "../components/PeriodHeader";


export default function MonthlySummaryScreen() {
    return(
        <Screen scrollable>
            <Typography variant="h1" color="text">
                Resumo Mensal
            </Typography>
            <PeriodHeader
                title="Gastos"
                period="Julho 2026"
                onPrevious={() => {}}
                onNext={() => {}}
            />
        </Screen>       
    );
}