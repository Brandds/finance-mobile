import { StyleSheet } from "react-native";

import { tokens } from "@/theme/tokens";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: tokens.spacing.sm,
  },

  avatarContainer: {
    marginBottom: tokens.spacing.sm,
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },
});