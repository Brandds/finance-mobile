import { StyleSheet } from "react-native";

import { Theme } from "@/theme/theme";

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 16,
      gap: 16,
      borderWidth:1,
      borderColor:theme.colors.borderOnSecondary,
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
    },

    content: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      flex: 1,
      gap: 12,
    },

    iconContainer: {
      width: 48,
      height: 48,
      borderRadius: 24,

      justifyContent: "center",
      alignItems: "center",

      marginRight: 16,
    },

    textContainer: {
      flex: 1,
    },

    title: {
      color: theme.colors.textSecondary,
      fontSize: 16,
      fontWeight: "600",
    },

    subtitle: {
      marginTop: 4,

      color: theme.colors.textSecondary,
      fontSize: 13,
    },
  });