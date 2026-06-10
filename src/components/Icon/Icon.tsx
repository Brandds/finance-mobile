import React from "react";
import {
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

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
  if (library === "fontAwesome") {
    return (
      <FontAwesome
        name={name as any}
        size={size}
        color={color}
      />
    );
  }

  return (
    <MaterialIcons
      name={name as any}
      size={size}
      color={color}
    />
  );
};