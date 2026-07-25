import { Theme } from "@/theme/theme";
import { StyleSheet } from "react-native";


export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginTop: theme.spacing.lg,
    },

    title: {
      marginBottom: theme.spacing.sm,
    },

    chipsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: theme.spacing.sm,
    },

    chip: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: 999,
      backgroundColor: theme.colors.surface,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },

    chipText: {
      marginLeft: theme.spacing.xs,
    },
  });