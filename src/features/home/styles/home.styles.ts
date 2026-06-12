import { StyleSheet } from "react-native";

import { Theme } from "@/theme/theme";

export const stylesHome = (theme: Theme) =>
  StyleSheet.create({

    container: {
      flex: 1,

      backgroundColor:
        theme.colors.background,
    },
  });