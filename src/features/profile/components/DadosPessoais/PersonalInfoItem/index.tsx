import { View } from "react-native";

import Typography from "@/components/Typography/Typography";


import { useTheme } from "@/theme/ThemeProvider";
import { styles as stylesPersonalInfoItem } from "./styles";
import { PersonalInfoItemProps } from "./types";

export default function PersonalInfoItem({
  label,
  value,
}: PersonalInfoItemProps) {
  const theme = useTheme();
  const styles = stylesPersonalInfoItem(theme);
  
  return (
    <View style={styles.container}>
      <Typography
        variant="body2"
        color={theme.colors.textSecondary}
      >
        {label}
      </Typography>

      <Typography variant="body1">
        {value}
      </Typography>
    </View>
  );
}