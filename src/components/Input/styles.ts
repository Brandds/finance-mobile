import { Theme } from "@/theme/theme";
import { StyleSheet } from "react-native";

const stylesIInput = (theme: Theme) =>
  StyleSheet.create({
    field: {
      gap: theme.spacing.sm,
    },

    inputContainer: {
      height: 56,

      borderRadius: theme.radius.md,

      backgroundColor: theme.colors.surfaceContainer,

      paddingHorizontal: theme.spacing.md,
      borderColor:theme.colors.border,
      borderWidth:1,
      flexDirection: "row",
      alignItems: "center",

      gap: theme.spacing.sm,
    },

    inputError: {
      borderWidth: 1,
      borderColor: theme.colors.error,
    },

    input: {
      flex: 1,

      color: theme.colors.placeholder,

      fontSize: theme.typography.bodyLg.fontSize,
    },
  });


export { stylesIInput };
