import {
  Image,
  View,
} from "react-native";

import Typography from "@/components/Typography/Typography";


import { useTheme } from "@/theme/ThemeProvider";
import { styles as stylesProfileHeader } from "./styles";
import { ProfileHeaderProps } from "./types";

export default function ProfileHeader({
  name,
  imageUrl,
}: ProfileHeaderProps) {

  const theme = useTheme();
  const styles = stylesProfileHeader(theme);
  
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

      {!!name && <Typography variant="h1">{name}</Typography>}
    </View>
  );
}
