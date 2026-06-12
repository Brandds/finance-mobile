import { StyleSheet } from "react-native";

import { Theme } from "@/theme/theme";

export const dadosPessoaisStyle = (theme: Theme) =>
  StyleSheet.create({
    button: {
      marginTop: theme.spacing.xl,
    },
  });