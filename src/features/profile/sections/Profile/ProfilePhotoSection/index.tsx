import React from "react";

import { View } from "react-native";
import { useAuthStore } from "@/store/auth/auth.store";
import ProfileAvatar from "../../../components/Profile/ProfileAvatar";


import Typography from "@/components/Typography/Typography";


import { useTheme } from "@/theme/ThemeProvider";
import { styles as stylesProfilePhotoSection } from "./styles";

export default function ProfilePhotoSection() {
  const user = useAuthStore(state => state.userResponse);
  const theme = useTheme();
  const styles = stylesProfilePhotoSection(theme);

  return (
    <View style={styles.photoContainer}>
      <ProfileAvatar imageUrl={user?.displayPicture ?? undefined} initials={user?.name?.trim().split(/\s+/).slice(0, 2).map(part => part[0]).join("").toUpperCase()} size={120} />

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
