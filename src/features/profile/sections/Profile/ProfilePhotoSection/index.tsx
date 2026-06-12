import React from "react";

import {
  Image,
  TouchableOpacity,
  View,
} from "react-native";


import Typography from "@/components/Typography/Typography";


import { Icon } from "@/components";
import { useTheme } from "@/theme/ThemeProvider";
import { styles as stylesProfilePhotoSection } from "./styles";

export default function ProfilePhotoSection() {
  const theme = useTheme();
  const styles = stylesProfilePhotoSection(theme);

  return (
    <View style={styles.photoContainer}>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: "https://i.pravatar.cc/300",
          }}
          style={styles.avatar}
        />

        <TouchableOpacity
          style={styles.editPhotoButton}
        >
          <Icon
            name="edit"
            size={18}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      </View>

      <Typography
        variant="body2"
        color={theme.colors.textSecondary}
        style={styles.photoLabel}
      >
        Foto de Perfil
      </Typography>
    </View>
  );
}