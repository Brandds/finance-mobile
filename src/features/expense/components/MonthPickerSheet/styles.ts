import { StyleSheet } from "react-native";

import { Theme } from "@/theme/theme";

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacing.md,
      paddingBottom: theme.spacing.lg,
    },

    yearRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: theme.spacing.md,
      marginBottom: theme.spacing.sm,
    },

    monthsGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: theme.spacing.sm,
    },

    monthItem: {
      width: "22%",
      paddingVertical: theme.spacing.md,
      borderRadius: theme.radius.md,
      alignItems: "center",
      justifyContent: "center",
    },

    monthItemSelected: {
      backgroundColor: theme.colors.primary,
    },

    monthItemUnselected: {
      backgroundColor: theme.colors.surfaceSecondary,
    },
  });
