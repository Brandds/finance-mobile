import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

import { Theme } from "@/theme/theme";

export const createTabNavigatorBottonTabsOptions = (
  theme: Theme
): BottomTabNavigationOptions => ({
  headerShown: false,

  tabBarShowLabel: true,

  tabBarActiveTintColor: theme.colors.primary,

  tabBarInactiveTintColor: theme.colors.textSecondary,

  tabBarStyle: {
    position: "absolute",

    height: 74,

    backgroundColor: theme.colors.surface,

    borderTopWidth: 1,

    borderTopColor: theme.colors.border,

    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,

    paddingTop: 10,
    paddingBottom: 12,

    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: -2,
    },

    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 10,
  },

  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: "600",
  },
});