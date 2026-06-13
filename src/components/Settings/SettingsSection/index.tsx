import { View } from "react-native";
import { styles } from "./styles";
import Typography from "@/components/Typography/Typography";
import { Card } from "@/components/Card/Card";
import { SettingsSectionProps } from "./types";
import { useTheme } from "@/theme/ThemeProvider";




export default function SettingsSection({
  title,
  children,
}: SettingsSectionProps) {
  const theme = useTheme();
  return (
    
    <View style={styles.container}>
      <Typography
        variant="body2"
        color={theme.colors.textSecondary}
        style={styles.title}
      >
        {title}
      </Typography>

      <Card >
        {children}
      </Card>
    </View>
  );
}