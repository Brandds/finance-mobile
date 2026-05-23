import { StyleSheet } from "react-native";

import { tokens } from "@/theme/tokens";

export const styles = StyleSheet.create({
  container: {
    gap: tokens.spacing.md,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  seeAllText: {
    color: tokens.colors.secondary,
  },

  listContent: {
    paddingRight: tokens.spacing.md,
    gap: tokens.spacing.md,
  },
});