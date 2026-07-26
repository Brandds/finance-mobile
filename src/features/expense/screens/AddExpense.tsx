import Screen from "@/components/Screen/Screen";
import { useState } from "react";
import QuickExpenseInput from "../components/QuickExpenseInput";
import ExpenseSuggestions from "../components/ExpenseSuggestions";
import { expenseSuggestionsMock } from "@/mocks/expenseSuggestions";
import ExpenseDetailsAction from "../components/ExpenseDetailsAction";
import ConfirmExpenseFooter from "../components/ConfirmExpenseFooter";
import { titleScreen } from "@/constants/titleScreen";


export default function AddExpenseScreen() {

  const [text, setText] = useState("");

  return (
    <Screen 
        scrollable
        headerTitle={titleScreen.NOVO_GASTO}
        showBackButton
    >

      <QuickExpenseInput
        value={text}
        description="Padaria"
        amount="R$ 14,00"
        onChangeText={setText}
      />

      <ExpenseSuggestions
        suggestions={expenseSuggestionsMock}
        onSelect={(suggestion) => console.log(suggestion)}
      />

      <ExpenseDetailsAction
        onPress={() => console.log("Abrir detalhes")}
      />

      <ConfirmExpenseFooter
        onConfirm={() => console.log("Salvar")}
        onCancel={() => console.log("Cancelar")}
      />

    </Screen>
  );
}