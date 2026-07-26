import Screen from "@/components/Screen/Screen";
import QuickExpenseInput from "../components/QuickExpenseInput";
import ExpenseSuggestions, { ExpenseSuggestion } from "../components/ExpenseSuggestions";
import ExpenseDetailsAction from "../components/ExpenseDetailsAction";

const suggestions: ExpenseSuggestion[] = [
  {
    id: "1",
    description: "Mercado",
    amount: 80,
    icon: "shopping-cart",
  },
  {
    id: "2",
    description: "Gasolina",
    amount: 250,
    icon: "local-gas-station",
  },
  {
    id: "3",
    description: "Uber",
    amount: 25,
    icon: "directions-car",
  },
  {
    id: "4",
    description: "Café",
    amount: 8,
    icon: "coffee",
  },
];

export default function AddExpense(){
    return (
        <Screen scrollable>
            <QuickExpenseInput
                amount="32"
                description="Teste"
                value={"Nada"}
                onChangeText={() => {}}
            ></QuickExpenseInput>
            <ExpenseSuggestions
                suggestions={suggestions}
                onSelect={(suggestion) => console.log(suggestion)}
            />
            <ExpenseDetailsAction
                onPress={() => {}}
            />
        </Screen>
    )
};