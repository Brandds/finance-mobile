// ProfileAvatar.tsx

import React, { useState } from "react";

import {
  Image,
  Pressable,
  View,
} from "react-native";


import Typography from "@/components/Typography/Typography";
import { ProfileAvatarProps } from "./types";
import { styles } from "./styles";
import { Icon } from "@/components";


export default function ProfileAvatar({
  imageUrl,
  initials,
  size = 96,
  editable = false,
  onEditPress,
}: ProfileAvatarProps) {
  const [failed, setFailed] = useState(false);
  React.useEffect(() => setFailed(false), [imageUrl]);
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.avatarContainer,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
          },
        ]}
      >
        {imageUrl && !failed ? (
          <Image
            source={{ uri: imageUrl }}
            onError={() => setFailed(true)}
            style={{
              width: size,
              height: size,
              borderRadius: size / 2,
            }}
          />
        ) : (
          <View style={styles.fallback}>
            <Typography variant="body1">
              {initials}
            </Typography>
          </View>
        )}
      </View>

      {editable && (
        <Pressable
          style={styles.editButton}
          onPress={onEditPress}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel="Alterar foto de perfil"
        >
          <Icon
            name="edit"
            size={16}
            color="#FFF"
          />
        </Pressable>
      )}
    </View>
  );
}
