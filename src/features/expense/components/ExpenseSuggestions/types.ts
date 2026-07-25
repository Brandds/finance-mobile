import { MaterialIcons } from "@expo/vector-icons";

export interface ExpenseSuggestion {
  id: string;
  description: string;
  amount: number;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export interface ExpenseSuggestionsProps {
  suggestions: ExpenseSuggestion[];
  onSelect: (suggestion: ExpenseSuggestion) => void;
}