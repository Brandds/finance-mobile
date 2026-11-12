import { Theme } from "@/theme/theme";
import { StyleSheet } from "react-native";


export const styles = (theme: Theme) =>
  StyleSheet.create({
    search: {
      color: theme.colors.text,
      borderColor: theme.colors.textSecondary,
      borderWidth: 1,
      borderRadius: theme.radius.md,
      padding: theme.spacing.md,
      marginVertical: theme.spacing.md,
      minHeight: 48,
    },
    listContainer: {
      marginTop: theme.spacing.lg,
      flex: 1,
    },
  });