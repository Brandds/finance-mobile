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
      borderRadius: 12,

      justifyContent: "center",
      alignItems: "center",

      backgroundColor: theme.colors.buttonSearch,
    },
  });