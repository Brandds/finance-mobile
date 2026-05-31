import React from "react";
import { View } from "react-native";

import Typography from "@/components/Typography/Typography";
import { SettingsBadgeProps } from "./types";
import { styles } from "./styles";

export default function SettingsBadge({
  label,
  variant = "success",
}: SettingsBadgeProps) {
  return (
    <View
      style={[
        styles.container,
        styles[variant],
      ]}
    >
      <Typography
        variant="body1"
        style={styles.label}
      >
        {label}
      </Typography>
    </View>
  );
}