import { Theme } from "@/theme/theme";
import { StyleSheet } from "react-native";


export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",

      paddingVertical: theme.spacing.md,
      paddingHorizontal: theme.spacing.lg,

      borderRadius: theme.radius.lg,

      backgroundColor: theme.colors.surface,

      marginTop: theme.spacing.lg,
    },

    leftContainer: {
      flexDirection: "row",
      alignItems: "center",
    },

    content: {
      marginLeft: theme.spacing.md,
    },
  });