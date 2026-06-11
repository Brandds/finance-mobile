import React from "react";
import { View, Text } from "react-native";

import {
  CircleCheck,
  CircleAlert,
  CircleX,
  Info,
} from "lucide-react-native";

import { styles } from "./GlobalToast.styles";
import { GlobalToastProps } from "./GLobalToast.types";


const toastColors = {
  success: "#16A34A",
  error: "#DC2626",
  warning: "#F59E0B",
  info: "#2563EB",
};

export default function GlobalToast({
  visible,
  toast,
}: GlobalToastProps) {
  if (!visible || !toast) {
    return null;
  }

  const backgroundColor = toastColors[toast.type];

  const iconMap = {
    success: CircleCheck,
    error: CircleX,
    warning: CircleAlert,
    info: Info,
  };

  const Icon = iconMap[toast.type];

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor,
        },
      ]}
    >
      <View style={styles.iconContainer}>
        <Icon
          size={22}
          color="#FFF"
        />
      </View>

      <View style={styles.content}>
        {toast.title && (
          <Text style={styles.title}>
            {toast.title}
          </Text>
        )}

        <Text style={styles.message}>
          {toast.message}
        </Text>
      </View>
    </View>
  );
}