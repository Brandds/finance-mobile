import { StyleSheet } from "react-native";

import { tokens } from "@/theme/tokens";

export const stylesEditProfile =
  StyleSheet.create({

    content: {
      padding: tokens.spacing.lg,
    },

    photoContainer: {
      alignItems: "center",

      marginBottom:
        tokens.spacing.xl,
    },

    avatar: {
      width: 120,
      height: 120,
      borderRadius: 60,
    },

    photoLabel: {
      marginTop:
        tokens.spacing.sm,
    },

    formContainer: {
      gap: tokens.spacing.md,
    },

    cpfContainer: {
      marginTop:
        tokens.spacing.lg,

      gap: tokens.spacing.xs,
    },

    actionsContainer: {
      marginTop:
        tokens.spacing.xl,
    },
});