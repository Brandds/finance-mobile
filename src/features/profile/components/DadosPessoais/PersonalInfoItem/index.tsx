import { View } from "react-native";

import Typography from "@/components/Typography/Typography";

import { tokens } from "@/theme/tokens";

import { PersonalInfoItemProps } from "./types";
import { styles } from "./styles";

export default function PersonalInfoItem({
  label,
  value,
}: PersonalInfoItemProps) {
  return (
    <View style={styles.container}>
      <Typography
        variant="body2"
        color={tokens.colors.textSecondary}
      >
        {label}
      </Typography>

      <Typography variant="body1">
        {value}
      </Typography>
    </View>
  );
}