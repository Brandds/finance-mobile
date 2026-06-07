import { View } from "react-native";

import Typography from "@/components/Typography/Typography";

import { PersonalInfoSectionProps } from "./types";
import { styles } from "./styles";
import { Card } from "@/components";

export default function PersonalInfoSection({
  title,
  children,
}: PersonalInfoSectionProps) {
  return (
    <Card>
      <View style={styles.container}>
        <Typography variant="h2">
          {title}
        </Typography>

        <View style={styles.content}>
          {children}
        </View>
      </View>
    </Card>
  );
}