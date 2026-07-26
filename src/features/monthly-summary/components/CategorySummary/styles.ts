import { Theme } from "@/theme/theme";
import { StyleSheet } from "react-native";


export const styles = (theme: Theme) =>
  StyleSheet.create({

    container: {

      width: "48%",

      padding: theme.spacing.md,

      marginBottom: theme.spacing.md,

    },


    iconContainer: {

      width: 40,

      height: 40,

      borderRadius: theme.radius.full,

      alignItems: "center",

      justifyContent: "center",

      marginBottom: theme.spacing.md,

    },


    title: {

      marginBottom: theme.spacing.xs,

    },


    amount: {

      marginBottom: theme.spacing.md,

    },


    progressBackground: {

      width: "100%",

      height: 6,

      borderRadius: theme.radius.full,

      overflow: "hidden",

    },


    progress: {

      height: "100%",

      borderRadius: theme.radius.full,

    },


    percentage: {

      marginTop: theme.spacing.sm,

      fontWeight: "700",

      textTransform: "uppercase",

    },


  });