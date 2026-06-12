import { Theme } from "@/theme/theme";
import { StyleSheet } from "react-native";


export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",

      padding: theme.spacing.md,

      borderRadius: theme.radius.xl,

      backgroundColor:
        theme.colors.surface,

      borderWidth: 1,
      borderColor:
        theme.colors.border,

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

      gap: theme.spacing.md,

      flex: 1,
    },

    iconContainer: {
      width: 42,
      height: 42,

      borderRadius: 999,

      alignItems: "center",
      justifyContent: "center",

      backgroundColor:
        theme.colors.surfaceSecondary,
    },

    content: {
      gap: 2,
      flex: 1,
    },
  });