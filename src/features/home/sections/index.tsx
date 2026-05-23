import { View, Pressable } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import Typography from "@/components/Typography/Typography";

import { tokens } from "@/theme/tokens";

import { styles } from "./styles";

type TabItem = {
  id: number;
  label: string;

  icon:
    | "home"
    | "list-alt"
    | "category"
    | "pie-chart";

  active?: boolean;
};

const tabs: TabItem[] = [
  {
    id: 1,
    label: "Home",
    icon: "home",
    active: true,
  },
  {
    id: 2,
    label: "Gastos",
    icon: "list-alt",
  },
  {
    id: 3,
    label: "Categorias",
    icon: "category",
  },
  {
    id: 4,
    label: "Resumo",
    icon: "pie-chart",
  },
];

export default function BottomTabBar() {

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {

        const isActive =
          tab.active ?? false;

        return (
          <Pressable
            key={tab.id}
            style={styles.tab}
          >
            <MaterialIcons
              name={tab.icon}
              size={24}
              color={
                isActive
                  ? tokens.colors.primary
                  : tokens.colors.textSecondary
              }
            />

            <Typography
              variant="body2"
              color={
                isActive
                  ? tokens.colors.primary
                  : tokens.colors.textSecondary
              }
              style={
                isActive
                  ? styles.activeLabel
                  : undefined
              }
            >
              {tab.label}
            </Typography>
          </Pressable>
        );
      })}
    </View>
  );
}