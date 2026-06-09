import React from "react";

import { View } from "react-native";

import { styles } from "./styles";

import { SkeletonBlockProps }
from "./types";

export default function SkeletonBlock({
  width,
  height,
  borderRadius = 8,
  style,
}: SkeletonBlockProps) {

  return (
    <View
      style={[
        styles.block,
        {
          width,
          height,
          borderRadius,
        },
        style,
      ]}
    />
  );
}