import { StyleSheet } from "react-native";

import { tokens } from "@/theme/tokens";

export const styles = StyleSheet.create({
  container: {
    backgroundColor:
      tokens.colors.primary,

    borderRadius: tokens.radius.xl,

    padding: tokens.spacing.lg,

    gap: tokens.spacing.md,

    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.12,
    shadowRadius: 24,

    elevation: 6,
  },

  badge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",

    gap: tokens.spacing.xs,

    paddingHorizontal:
      tokens.spacing.sm,

    paddingVertical: 6,

    borderRadius: 999,

    backgroundColor:
      "rgba(255,255,255,0.12)",
  },
});