import { StyleSheet } from "react-native";

import { Theme } from "@/theme/theme";

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor:
        theme.colors.primary,

      borderRadius: theme.radius.xl,

      padding: theme.spacing.lg,

      gap: theme.spacing.md,

      overflow: "hidden",

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.12,
      shadowRadius: 24,

      elevation: 6,
    },

    badge: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "flex-start",

      gap: theme.spacing.xs,

      paddingHorizontal:
        theme.spacing.sm,

      paddingVertical: 6,

      borderRadius: 999,

      backgroundColor:
        "rgba(255,255,255,0.12)",
    },
  });