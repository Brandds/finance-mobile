import { View } from "react-native";
import { styles } from "./styles";
import Typography from "@/components/Typography/Typography";
import { Card } from "@/components/Card/Card";
import { SettingsSectionProps } from "./types";




export default function SettingsSection({
  title,
  children,
}: SettingsSectionProps) {
  return (
    <View style={styles.container}>
      <Typography
        variant="body2"
        color="textSecondary"
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