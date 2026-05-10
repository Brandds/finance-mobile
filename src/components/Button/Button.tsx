import React from "react";

import {
  Pressable,
  Text,
  ActivityIndicator,
} from "react-native";

import { useTheme } from "@/theme/useTheme";

import { propsButton } from "./types";

type Props = propsButton;

export const Button = ({
  title,
  children,
  onPress,
  variant = "primary",
  loading = false,
  style,
}: Props) => {
  const theme = useTheme();

  const getBackground = () => {
    switch (variant) {
      case "secondary":
        return "transparent";

      case "ghost":
        return "transparent";

      default:
        return theme.colors.primary;
    }
  };

  const getBorder = () => {
    if (variant === "secondary") {
      return {
        borderWidth: 1,
        borderColor: theme.colors.primary,
      };
    }

    return {};
  };

  const getTextColor = () => {
    switch (variant) {
      case "primary":
        return theme.colors.onPrimary;

      default:
        return theme.colors.primary;
    }
  };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: getBackground(),

          padding: theme.spacing.md,

          borderRadius: theme.radius.lg,

          alignItems: "center",
          justifyContent: "center",

          ...getBorder(),
        },

        pressed && {
          opacity: 0.7,
          transform: [{ scale: 0.98 }],
        },

        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : children ? (
        children
      ) : (
        <Text
          style={{
            color: getTextColor(),
            fontWeight: "600",
          }}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
};