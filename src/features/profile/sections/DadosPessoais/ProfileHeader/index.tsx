import {
  View,
  Image,
} from "react-native";

import Typography from "@/components/Typography/Typography";

import { tokens } from "@/theme/tokens";

import { styles } from "./styles";
import { ProfileHeaderProps } from "./types";

export default function ProfileHeader({
  name,
  subtitle,
  imageUrl,
}: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.avatar}
        />
      </View>

      <Typography variant="h1">
        {name}
      </Typography>

      <Typography
        variant="body2"
        color={tokens.colors.textSecondary}
      >
        {subtitle}
      </Typography>
    </View>
  );
}