import React from "react";

import {
  View,
  Pressable,
} from "react-native";

import Typography from "@/components/Typography/Typography";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SettingsItemProps } from "./types";
import { styles } from "./styles";


export default function SettingsItem({
  icon,
  title,
  value,
  onPress,
  divider = true,
  showChevron = true,
}: SettingsItemProps) {
  return (
    <>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.container,
          pressed && styles.pressed,
        ]}
      >
        <View style={styles.leftContent}>
          <View style={styles.iconContainer}>
            {icon}
          </View>

          <Typography variant="body1">
            {title}
          </Typography>
        </View>

        <View style={styles.rightContent}>
          {value && (
            <Typography
              variant="body2"
              color="textSecondary"
            >
              {value}
            </Typography>
          )}

          {showChevron && (
            <MaterialIcons
              name="chevron-right"
              size={20}
              color="#9CA3AF"
            />
          )}
        </View>
      </Pressable>

      {divider && (
        <View style={styles.divider} />
      )}
    </>
  );
}

