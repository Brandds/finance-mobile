import { StyleSheet } from "react-native";

import { Theme } from "@/theme/theme";

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      gap: theme.spacing.md,
    },

    content: {
      gap: theme.spacing.lg,
    },
  });