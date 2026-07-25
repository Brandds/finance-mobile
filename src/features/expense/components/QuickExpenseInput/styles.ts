import { Theme } from "@/theme/theme";
import { StyleSheet } from "react-native";


export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      padding: theme.spacing.lg,
      borderRadius: theme.radius.lg,
      backgroundColor: theme.colors.surface,
      marginBottom: theme.spacing.lg,
    },

    input: {
      fontSize: 26,
      fontWeight: "600",
      color: theme.colors.primary,
      paddingVertical: theme.spacing.sm,
    },

    divider: {
      height: 1,
      backgroundColor: theme.colors.border,
      marginVertical: theme.spacing.md,
    },

    infoContainer: {
      gap: theme.spacing.sm,
    },

    infoRow: {
      flexDirection: "row",
      alignItems: "center",
    },

    infoContent: {
      marginLeft: theme.spacing.sm,
    },

    label: {
      fontWeight: "500",
    },

    value: {
      fontWeight: "700",
    },
  });