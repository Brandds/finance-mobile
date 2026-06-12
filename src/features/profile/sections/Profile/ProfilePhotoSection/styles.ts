import { StyleSheet } from "react-native";

import { Theme } from "@/theme/theme";

export const styles = (theme: Theme) =>
  StyleSheet.create({
    photoContainer: {
      alignItems: "center",

      marginBottom:
        theme.spacing.xl,
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
        theme.colors.primary,
    },

    photoLabel: {
      marginTop:
        theme.spacing.sm,
    },
  });