import { StyleSheet } from "react-native";

import { Theme } from "@/theme/theme";

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent:"center",
      marginVertical: 16,
    },

    inputContainer: {
      flex: 1,
      marginRight: 12,
    },

    addButton: {
      width: 48,
      height: 48,
      borderRadius: theme.radius.md,

      justifyContent: "center",
      alignItems: "center",

      backgroundColor: theme.colors.primary,
    },
    pressed:{
      opacity:0.8,
      transform: [{ scale: 0.95 }]
    }
  });