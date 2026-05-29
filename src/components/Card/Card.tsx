import React from "react";

import {
  View,
  ViewStyle,
  StyleProp,
} from "react-native";
import { styles } from "./styles";


type CardProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function Card({
  children,
  style,
}: CardProps) {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
}

