import { StyleSheet } from "react-native";

import { Theme } from "@/theme/theme";

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      gap: theme.spacing.md,
    },

    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    seeAllText: {
      color: theme.colors.secondary,
    },

    listContent: {
      paddingRight: theme.spacing.md,
      gap: theme.spacing.md,
    },
  });