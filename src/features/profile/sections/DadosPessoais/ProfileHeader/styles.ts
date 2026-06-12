import { StyleSheet } from "react-native";

import { Theme } from "@/theme/theme";

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      gap: theme.spacing.sm,
    },

    avatarContainer: {
      marginBottom: theme.spacing.sm,
    },

    avatar: {
      width: 96,
      height: 96,
      borderRadius: 48,
    },
  });