import React from "react";

import {
  View,
  Switch,
} from "react-native";

import Typography from "@/components/Typography/Typography";
import { SettingsToggleProps } from "./types";
import { styles } from "./styles";

export default function SettingsToggle({
  icon,
  title,
  value,
  onValueChange,
  divider = true,
}: SettingsToggleProps) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <View style={styles.iconContainer}>
            {icon}
          </View>

          <Typography variant="body1">
            {title}
          </Typography>
        </View>

        <Switch
          value={value}
          onValueChange={onValueChange}
        />
      </View>

      {divider && (
        <View style={styles.divider} />
      )}
    </>
  );
}