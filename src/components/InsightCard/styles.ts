import { StyleSheet } from "react-native";

import { Theme } from "@/theme/theme";


export const styles = (theme: Theme) =>
  StyleSheet.create({

    container: {

      marginTop: theme.spacing.lg,

      backgroundColor: theme.colors.primary,

      borderRadius: theme.radius.xl,

      padding: theme.spacing.lg,

      overflow: "hidden",

      minHeight: 150,

    },


    content: {

      zIndex: 1,

    },


    description: {

      marginTop: theme.spacing.sm,

      opacity: 0.85,

      maxWidth: "80%",

    },


    iconContainer: {

      position: "absolute",

      right: -15,

      bottom: -20,

      opacity: 0.1,

    },


  });