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

    titleContainer: {
      flex: 1,
    },

    actions: {
      flexDirection: "row",
      alignItems: "center",
    },

    period: {
      marginTop: theme.spacing.xs,
    },

    iconButton: {
      padding: theme.spacing.sm,
    },
  });