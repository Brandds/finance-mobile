import { Theme } from "@/theme/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: Theme) =>
  StyleSheet.create({
    content: {
      flex: 1,
      gap: theme.spacing.xs,
    },

    card: {
      backgroundColor: theme.colors.background,
      borderRadius: theme.radius.xl,
      padding: theme.spacing.md,
      flexDirection: "row",
      gap: theme.spacing.md,
      position: "relative",
      borderWidth: 1,
      borderColor: theme.colors.borderOnSecondary,
    },

    cardPressed: {
      opacity: 0.9,
      transform: [{ scale: 0.98 }],
    },

    iconContainer: {
      width: 48,
      height: 48,
      borderRadius: 24,
      alignItems: "center",
      justifyContent: "center",
    },

    header: {
      gap: theme.spacing.xs,
      marginBottom: theme.spacing.xs,
      paddingRight: theme.spacing.md,
    },

    unreadDot: {
      width: 10,
      height: 10,
      borderRadius: 999,
      backgroundColor: theme.colors.primary,
      position: "absolute",
      top: 16,
      right: 16,
    },

    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      marginBottom: 16,
      marginTop: 8,
    },

    line: {
      flex: 1,
      height: 1,
      backgroundColor: "#334155",
    },
  });
