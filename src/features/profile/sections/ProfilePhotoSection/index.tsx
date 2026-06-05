import React from "react";

import {
    Image,
    TouchableOpacity,
    View,
} from "react-native";


import Typography from "@/components/Typography/Typography";

import { tokens } from "@/theme/tokens";

import { Icon } from "@/components";
import { styles } from "./styles";

export default function ProfilePhotoSection() {
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
            color={tokens.colors.primary}
          />
        </TouchableOpacity>
      </View>

      <Typography
        variant="body2"
        color={tokens.colors.textSecondary}
        style={styles.photoLabel}
      >
        Foto de Perfil
      </Typography>
    </View>
  );
}