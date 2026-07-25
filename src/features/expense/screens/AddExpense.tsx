import Screen from "@/components/Screen/Screen";
import QuickExpenseInput from "../components/QuickExpenseInput";

export default function AddExpense(){
    return (
        <Screen scrollable>
            <QuickExpenseInput
                amount="32"
                description="Teste"
                value={"Nada"}
                onChangeText={() => {}}
            ></QuickExpenseInput>
        </Screen>
    )
};