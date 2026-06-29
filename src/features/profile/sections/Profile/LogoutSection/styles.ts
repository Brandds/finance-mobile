import { Theme } from "@/theme/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginBottom:30,
    },

    content: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
    },

    button: {
      alignSelf: "center",
    },
  });