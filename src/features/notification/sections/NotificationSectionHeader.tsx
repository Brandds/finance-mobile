import { View } from "react-native";

import Typography from "@/components/Typography/Typography";
import { styles } from "../styles";
import { useTheme } from "@/theme/ThemeProvider";


type Props = {
  title: string;
};

export default function NotificationSectionHeader({
  title,
}: Props) {
  const theme = useTheme();
  const themedStyles = styles(theme);
  return (
    <View style={themedStyles.container}>
      <Typography
        variant="h2"
        color="#64748B"
      >
        {title}
      </Typography>

      <View style={themedStyles.line} />
    </View>
  );
}