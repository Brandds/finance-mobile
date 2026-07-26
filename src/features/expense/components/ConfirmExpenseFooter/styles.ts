import { Theme } from "@/theme/theme";
import { StyleSheet } from "react-native";


export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginTop: theme.spacing.xl,
      marginBottom: theme.spacing.lg,
    },

    cancelButton: {
      alignItems: "center",
      marginTop: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
    },
  });