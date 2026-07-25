import { StyleSheet } from "react-native";

import { Theme } from "@/theme/theme";

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",

      paddingVertical: theme.spacing.sm,
    },

    left: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing.sm,
    },

    avatar: {
      width: 44,
      height: 44,

      borderRadius: 999,

      borderWidth: 1,
      borderColor: theme.colors.border,
    },

    button: {
      width: 42,
      height: 42,

      borderRadius: 999,

      alignItems: "center",
      justifyContent: "center",

      backgroundColor: theme.colors.button,
    },
    buttonPressed: {
      backgroundColor: "#E5E7EB",
      opacity: 0.8,
      transform: [{ scale: 0.95 }],
    },
  });