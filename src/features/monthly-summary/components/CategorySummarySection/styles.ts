import { Theme } from "@/theme/theme";
import { StyleSheet } from "react-native";


export const styles = (theme: Theme) =>
  StyleSheet.create({

    container: {

      marginTop: theme.spacing.lg,

    },


    title: {

      marginBottom: theme.spacing.md,

    },


    grid: {

      flexDirection: "row",

      flexWrap: "wrap",

      justifyContent: "space-between",

    },

  });