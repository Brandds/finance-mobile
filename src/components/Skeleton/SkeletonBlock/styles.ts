import { tokens } from "@/theme/tokens";
import { StyleSheet } from "react-native";
import { skeletonTheme } from "../SkeletonTheme";

export const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    backgroundColor:   skeletonTheme.background,
  },

  shimmer: {
    width: "100%",
    height: "100%",
  },
});