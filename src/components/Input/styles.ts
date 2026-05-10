import { tokens } from "@/theme/tokens";
import { StyleSheet } from "react-native";

const stylesIInput = StyleSheet.create({
  field: {
    gap: tokens.spacing.sm,
  },

  inputContainer: {
    height: 56,

    borderRadius: tokens.radius.md,

    backgroundColor: tokens.colors.surfaceContainer,

    paddingHorizontal: tokens.spacing.md,

    flexDirection: "row",
    alignItems: "center",

    gap: tokens.spacing.sm,
  },

  inputError: {
    borderWidth: 1,
    borderColor: tokens.colors.error,
  },

  input: {
    flex: 1,

    color: tokens.colors.text,

    fontSize: tokens.typography.bodyLg.fontSize,
  },
});


export { stylesIInput };