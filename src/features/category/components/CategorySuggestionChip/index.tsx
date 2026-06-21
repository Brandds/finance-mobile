import React from "react";
import { Pressable, Text } from "react-native";

import { styles as styleCategorySuggestionChip } from "./styles";
import { CategorySuggestionChipProps } from "./types";
import { useTheme } from "@/theme/ThemeProvider";

export default function CategorySuggestionChip({
  id,
  label,
  selected = false,
  onPress,
}: CategorySuggestionChipProps) {
  function handlePress() {
    onPress?.(id);
  }
  const theme = useTheme();
  const styles = styleCategorySuggestionChip(theme);
  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.container,
        selected && styles.containerSelected,
        pressed && styles.containerPressed,
      ]}
    >
      <Text
        style={[
          styles.label,
          selected && styles.labelSelected,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}