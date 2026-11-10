import { StyleSheet } from "react-native";

import { Theme } from "@/theme/theme";

export const styles = (theme: Theme) =>
  StyleSheet.create({
    header: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" },
    link: { minHeight: 44, justifyContent: "center", paddingHorizontal: theme.spacing.sm },
    container: {
      gap: theme.spacing.md,
    },

    list: {
      gap: theme.spacing.sm,
    },
  });
