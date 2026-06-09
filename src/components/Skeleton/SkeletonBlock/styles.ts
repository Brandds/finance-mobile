import { tokens } from "@/theme/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    backgroundColor: tokens.colors.surfaceVariant,
  },

  shimmer: {
    width: "100%",
    height: "100%",
  },
});