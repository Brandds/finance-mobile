import { StyleSheet } from "react-native";
import { Theme } from "@/theme/theme";

export const addExpenseStyles = (theme: Theme) => StyleSheet.create({
  form: { gap: theme.spacing.md },
  choices: { flexDirection: "row", flexWrap: "wrap", gap: theme.spacing.sm },
  choice: {
    minHeight: 48,
    justifyContent: "center",
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  selected: { backgroundColor: theme.colors.primary },
});
