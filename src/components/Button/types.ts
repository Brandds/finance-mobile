import { ReactNode } from "react";
import { GestureResponderEvent, ViewStyle } from "react-native";

export interface propsButton {
  title?: string;

  children?: ReactNode;

  onPress?: (event: GestureResponderEvent) => void;

  variant?: "primary" | "secondary" | "ghost";

  loading?: boolean;

  style?: ViewStyle;
}