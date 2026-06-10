import { View }
from "react-native";

import { MaterialIcons }
from "@expo/vector-icons";

import Typography
from "@/components/Typography/Typography";

import ExpenseItem
from "../ExpenseItem";

import { styles }
from "./styles";
import { useEffect, useState } from "react";
import SkeletonBlock from "@/components/Skeleton/SkeletonBlock";
import SkeletonExpenseItem from "@/components/Skeleton/SkeletonExpenseItem";
import { SkeletonExpenseList, SkeletonSummaryCard } from "@/components/Skeleton";

type Expense = {
  id: number;
  description: string;
  amount: string;
  date: string;

  icon: keyof typeof MaterialIcons.glyphMap;
};

const expenses: Expense[] = [
  {
    id: 1,
    description: "Supermercado",
    amount: "R$ 150,00",
    date: "Hoje, 14:20",
    icon: "shopping-cart",
  },
  {
    id: 2,
    description: "Uber",
    amount: "R$ 28,50",
    date: "Ontem",
    icon: "local-taxi",
  },
  {
    id: 3,
    description: "Netflix",
    amount: "R$ 55,90",
    date: "12 Out",
    icon: "subscriptions",
  },
];

export default function RecentExpensesSection() {
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>

      <Typography variant="h2">
        Gastos Recentes
      </Typography>

      <View style={styles.list}>
      {loading ? (
      <SkeletonSummaryCard />

      ) : (
        expenses.map((item) => (
          <ExpenseItem
            key={item.id}
            description={item.description}
            amount={item.amount}
            date={item.date}
            icon={item.icon}
          />
        ))
      )}

      </View>

    </View>
  );
}