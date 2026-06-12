import { StyleSheet } from "react-native";

import { Theme } from "@/theme/theme";

export const stylesEditProfile = (theme: Theme) =>
  StyleSheet.create({

    content: {
      padding: theme.spacing.lg,
    },

    photoContainer: {
      alignItems: "center",

      marginBottom:
        theme.spacing.xl,
    },

    avatar: {
      width: 120,
      height: 120,
      borderRadius: 60,
    },

    photoLabel: {
      marginTop:
        theme.spacing.sm,
    },

    formContainer: {
      gap: theme.spacing.md,
    },

    cpfContainer: {
      marginTop:
        theme.spacing.lg,

      gap: theme.spacing.xs,
    },

    actionsContainer: {
      marginTop:
        theme.spacing.xl,
    },
  });