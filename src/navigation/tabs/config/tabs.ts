import HomeScreen from "@/features/home/screens/HomeScreen";
import { ROUTES } from "@/navigation/routes";
import { RootTabParamList } from "@/navigation/types";
import { MaterialIcons } from "@expo/vector-icons";
import { ComponentType } from "react";

type TabConfig = {
  name: keyof RootTabParamList;
  title: string;
  component: ComponentType<any>;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export const tabs: TabConfig[] = [
  {
    name: ROUTES.HOME,
    title: "Home",
    component: HomeScreen,
    icon: "home",
  },
//   {
//     name: ROUTES.EXPENSES,
//     title: "Gastos",
//     component: ExpensesScreen,
//     icon: "payments",
//   },
];