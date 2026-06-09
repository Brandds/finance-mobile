import { DimensionValue, StyleProp, ViewStyle } from "react-native";

export type SkeletonBlockProps = {
  width: DimensionValue;
  height: DimensionValue;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
};