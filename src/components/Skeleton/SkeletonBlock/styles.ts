import { StyleSheet } from "react-native";
import { skeletonTheme } from "../SkeletonTheme";
import { Theme } from "@/theme/theme";

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      overflow: "hidden",
      backgroundColor: skeletonTheme.background,
    },

    shimmer: {
      width: "100%",
      height: "100%",
    },
  });