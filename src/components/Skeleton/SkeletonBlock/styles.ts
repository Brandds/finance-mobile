import { Theme } from "@/theme/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      overflow: "hidden",
      backgroundColor: theme.colors.backgroundSkeleton,
    },

    shimmer: {
      width: "100%",
      height: "100%",
    },
  });