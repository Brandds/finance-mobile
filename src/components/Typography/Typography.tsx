import { Text } from "react-native";
import { TypographyProps } from "./types";
import { tokens } from "@/theme/tokens";

const Typography = ({
  variant = "body1",
  color = tokens.colors.text,
  align = "left",
  children,
}: TypographyProps) => {
  const variants = {
    h1: tokens.typography.h1,
    h2: tokens.typography.h2,
    body1: tokens.typography.bodyLg,
    body2: tokens.typography.bodyMd,
  };

  return (
    <Text
      style={[
        variants[variant],
        {
          color,
          textAlign: align,
        },
      ]}
    >
      {children}
    </Text>
  );
};

export default Typography;