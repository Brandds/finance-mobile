import { StyleSheet }
from "react-native";

import { tokens }
from "@/theme/tokens";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    padding: tokens.spacing.md,

    borderRadius: tokens.radius.xl,

    backgroundColor:
      tokens.colors.surface,

    borderWidth: 1,
    borderColor:
      tokens.colors.border,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 12,

    elevation: 2,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",

    gap: tokens.spacing.md,

    flex: 1,
  },

  iconContainer: {
    width: 42,
    height: 42,

    borderRadius: 999,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor:
      tokens.colors.surfaceSecondary,
  },

  content: {
    gap: 2,
    flex: 1,
  },
});