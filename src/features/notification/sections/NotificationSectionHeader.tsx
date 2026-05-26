import { View } from "react-native";

import Typography from "@/components/Typography/Typography";
import { styles } from "../styles";


type Props = {
  title: string;
};

export default function NotificationSectionHeader({
  title,
}: Props) {
  return (
    <View style={styles.container}>
      <Typography
        variant="h2"
        color="#64748B"
      >
        {title}
      </Typography>

      <View style={styles.line} />
    </View>
  );
}