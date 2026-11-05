import { StyleSheet } from "react-native";
import { Theme } from "@/theme/theme";

export const styles = (theme: Theme) => StyleSheet.create({
  error: {
    marginTop: theme.spacing.lg,
    padding: theme.spacing.lg,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.surfaceSecondary,
  },
});
