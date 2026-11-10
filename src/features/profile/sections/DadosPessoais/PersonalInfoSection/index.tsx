import { View } from "react-native";

import Typography from "@/components/Typography/Typography";

import { PersonalInfoSectionProps } from "./types";
import { styles } from "./styles";
import { Card } from "@/components";
import { useTheme } from "@/theme/ThemeProvider";

export default function PersonalInfoSection({
  title,
  children,
}: PersonalInfoSectionProps) {
  const theme = useTheme();
  const themedStyles = styles(theme);
  return (
    <Card>
      <View style={themedStyles.container}>
        <Typography variant="h2">
          {title}
        </Typography>

        <View style={themedStyles.content}>
          {children}
        </View>
      </View>
    </Card>
  );
}