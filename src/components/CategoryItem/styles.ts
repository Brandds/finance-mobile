import { StyleSheet } from "react-native";

import { Theme } from "@/theme/theme";

export const styles = (theme: Theme) =>
  StyleSheet.create({

    container: {
      height: 72,

      paddingHorizontal: 20,

      flexDirection: "column",

      alignItems: "center",

      justifyContent: "space-between",

      backgroundColor:"transparent",

      borderBottomWidth: 1,

      borderBottomColor: theme.colors.surfaceLine,
    },
    iconContainer: {
      width: 60,
      height: 40,

      borderRadius: 8,

      alignItems: "center",
      justifyContent: "center",
    },
  });