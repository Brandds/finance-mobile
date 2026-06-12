import React from "react";
import {
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { useTheme } from "@/theme/ThemeProvider";

type Props = {
  library?: "material" | "fontAwesome";
  name: string;
  size?: number;
  color?: string;
};

export const Icon = ({
  library = "material",
  name,
  size = 24,
  color,
}: Props) => {

  const theme = useTheme();
  const colorCustom = color || theme.colors.onSecondary;
  if (library === "fontAwesome") {
    return (
      <FontAwesome
        name={name as any}
        size={size}
        color={colorCustom}
      />
    );
  }

  return (
    <MaterialIcons
      name={name as any}
      size={size}
      color={colorCustom}
    />
  );
};