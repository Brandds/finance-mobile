import React from "react";

import {
  Pressable,
  View,
} from "react-native";

import Typography from "@/components/Typography/Typography";

import { Icon } from "@/components/Icon/Icon";
import { styles } from "./styles";
import { SettingsItemProps } from "./types";


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
            <Icon
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

