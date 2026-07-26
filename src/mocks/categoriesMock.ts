import { CategorySummaryProps } from "@/features/monthly-summary/components/CategorySummary";


export const categoriesMock: CategorySummaryProps[] = [
  {
    id: 1,
    title: "Alimentação",
    amount: "R$ 1.250,00",
    percentage: 35,
    icon: "restaurant",
    color: "#22C55E",
  },

  {
    id: 2,
    title: "Mercado",
    amount: "R$ 800,00",
    percentage: 22,
    icon: "shopping-cart",
    color: "#3B82F6",
  },

  {
    id: 3,
    title: "Transporte",
    amount: "R$ 450,00",
    percentage: 13,
    icon: "directions-car",
    color: "#F59E0B",
  },
];