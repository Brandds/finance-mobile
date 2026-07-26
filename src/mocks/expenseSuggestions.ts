// mocks/expenseSuggestions.ts

import { ExpenseSuggestion } from "@/features/expense/components/ExpenseSuggestions";


export const expenseSuggestionsMock: ExpenseSuggestion[] = [
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
];