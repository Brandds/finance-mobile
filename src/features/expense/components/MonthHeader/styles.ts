import { Theme } from "@/theme/theme";
import { StyleSheet } from "react-native";


export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: theme.spacing.lg,
    },

    monthButton: {
      flexDirection: "row",
      alignItems: "center",
    },

    monthText: {
      marginRight: theme.spacing.xs,
    },

    actions: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing.sm,
    },

    actionButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.surfaceSecondary,
    },
  });