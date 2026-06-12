import { StyleSheet } from "react-native";

import { Theme } from "@/theme/theme";

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      position: "absolute",

      right: 24,
      bottom: 96,

      width: 64,
      height: 64,

      borderRadius: 999,

      alignItems: "center",
      justifyContent: "center",

      backgroundColor:
        theme.colors.primary,

      shadowColor: "#000",

      shadowOffset: {
        width: 0,
        height: 8,
      },

      shadowOpacity: 0.2,
      shadowRadius: 12,

      elevation: 8,
    },
  });