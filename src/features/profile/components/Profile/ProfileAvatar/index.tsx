// ProfileAvatar.tsx

import React from "react";

import {
  Image,
  Pressable,
  View,
} from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import Typography from "@/components/Typography/Typography";
import { ProfileAvatarProps } from "./types";
import { styles } from "./styles";


export default function ProfileAvatar({
  imageUrl,
  initials,
  size = 96,
  editable = false,
  onEditPress,
}: ProfileAvatarProps) {
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
        {imageUrl ? (
          <Image
            source={{ uri: imageUrl }}
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
        >
          <MaterialIcons
            name="edit"
            size={16}
            color="#FFF"
          />
        </Pressable>
      )}
    </View>
  );
}