import { Theme } from "@/theme/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
    },

    button: {
      width: 42,
      height: 42,
      borderRadius: 999,

      backgroundColor: theme.colors.surfaceSecondary,

      alignItems: "center",
      justifyContent: "center",
    },

    buttonPressed: {
      opacity: 0.8,
      transform: [{ scale: 0.95 }],
    },
  });