import { StyleSheet } from "react-native";
import { Theme } from "@/theme/theme";

export const avatarStyles = (theme: Theme) => StyleSheet.create({
  sheetContent: { alignItems: "center", padding: theme.spacing.lg, gap: theme.spacing.md },
  action: {
    minHeight: 44,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.surface,
  },
});
