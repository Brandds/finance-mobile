import { Theme } from "@/theme/ThemeProvider";
import { StyleSheet } from "react-native";

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      padding: theme.spacing.lg,
      paddingBottom: theme.spacing.xl * 2,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: theme.spacing.lg,
    },
    sectionTitle: {
      marginTop: theme.spacing.md,
      marginBottom: theme.spacing.sm,
    },
    chipContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: theme.spacing.sm,
      marginBottom: theme.spacing.md,
    },
    chip: {
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.radius.full,
      borderWidth: 1,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.surface,
    },
    chipSelected: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.primary,
    },
    chipText: {
      color: theme.colors.textSecondary,
    },
    chipTextSelected: {
      color: theme.colors.onPrimary,
      fontWeight: "bold",
    },
    row: {
      flexDirection: "row",
      gap: theme.spacing.md,
      marginBottom: theme.spacing.md,
    },
    flex1: {
      flex: 1,
    },
    footer: {
      marginTop: theme.spacing.xl,
    },
  });
