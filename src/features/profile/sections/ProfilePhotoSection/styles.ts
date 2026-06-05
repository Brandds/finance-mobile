import { StyleSheet } from "react-native";

import { tokens } from "@/theme/tokens";

export const styles = StyleSheet.create({
  photoContainer: {
    alignItems: "center",

    marginBottom:
      tokens.spacing.xl,
  },

  avatarContainer: {
    position: "relative",
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  editPhotoButton: {
    position: "absolute",

    right: 0,
    bottom: 0,

    width: 36,
    height: 36,

    borderRadius: 18,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor:
      tokens.colors.primary,
  },

  photoLabel: {
    marginTop:
      tokens.spacing.sm,
  },
});