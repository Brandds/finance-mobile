import React from "react";
import { Pressable, View, Text } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { useTheme } from "@/theme/ThemeProvider";

import { styles } from "./styles";
import { CategoryCardProps } from "./types";
import { Icon } from "@/components";

export function CategoryCard({
  title,
  transactions,
  icon,
  iconColor,
  iconBackgroundColor,
  onPress,
}: CategoryCardProps) {
  const  theme  = useTheme();

  const style = styles(theme);

  return (
    <Pressable
      style={style.container}
      onPress={onPress}
    >
      <View style={style.content}>
        <View
          style={[
            style.iconContainer,
            {
              backgroundColor: iconBackgroundColor,
            },
          ]}
        >
          <Icon
            name={icon}
            size={24}
            color={iconColor}
          />
        </View>

        <View style={style.textContainer}>
          <Text style={style.title}>{title}</Text>

          <Text style={style.subtitle}>
            {transactions} transações este mês
          </Text>
        </View>
      </View>

      <Icon
        name="chevron-right"
        size={24}
        color={theme.colors.surfaceLine}
      />
    </Pressable>
  );
}