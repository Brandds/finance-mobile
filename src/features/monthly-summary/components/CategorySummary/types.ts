import { MaterialIcons } from "@expo/vector-icons";

export interface CategorySummaryProps {
  id: number;
  title: string;
  amount: string;
  percentage: number;
  icon: keyof typeof MaterialIcons.glyphMap;
  color: string;
}