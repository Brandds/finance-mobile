import { StyleSheet } from "react-native";
import { useTheme } from "@/theme/ThemeProvider";

export const styles = (theme: ReturnType<typeof useTheme>) => StyleSheet.create({
  separator: { height: theme.spacing.sm },
  contentContainer: { paddingBottom: theme.spacing.xl * 3 },
  feedback: { gap: theme.spacing.md, paddingVertical: theme.spacing.md },
  modal: { flex: 1, backgroundColor: theme.colors.background },
  form: { padding: theme.spacing.lg, paddingTop: theme.spacing.xl * 2, gap: theme.spacing.md },
});
