import { StyleSheet } from "react-native";

import { tokens } from "@/theme/tokens";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingVertical: tokens.spacing.sm,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: tokens.spacing.sm,
  },

  avatar: {
    width: 44,
    height: 44,

    borderRadius: 999,

    borderWidth: 1,
    borderColor: tokens.colors.border,
  },

  button: {
    width: 42,
    height: 42,

    borderRadius: 999,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor:  tokens.colors.surfaceSecondary,
  },
   buttonPressed: {
    backgroundColor: "#E5E7EB",
    opacity: 0.8,
    transform: [{ scale: 0.95 }],
  },
});