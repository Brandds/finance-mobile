import { Text } from "react-native";

import { TypographyProps } from "./types";

import { useTheme } from "@/theme/ThemeProvider";

const Typography = ({
  variant = "body1",
  color,
  align = "left",
  children,
  style,
  onPress,
}: TypographyProps) => {
  const theme =  useTheme();

  const colorTeheme = color || theme.colors.text;

  const variants = {
    h1: theme.typography.h1,
    h2: theme.typography.h2,
    body1: theme.typography.bodyLg,
    body2: theme.typography.bodyMd,
  };

  return (
    <Text
      style={[
        variants[variant],
        {
          color: colorTeheme,
          textAlign: align,
        },
        style,
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

export default Typography;