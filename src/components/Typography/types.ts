import {
  TextStyle,
  StyleProp,
} from "react-native";

export interface TypographyProps {
  children: React.ReactNode;

  variant?: "h1"
    | "h2"
    | "body1"
    | "body2";

  color?: string;

  align?: "left"
    | "center"
    | "right";

  style?: StyleProp<TextStyle>;
}