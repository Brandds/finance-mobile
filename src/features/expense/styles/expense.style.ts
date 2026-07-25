import { Theme } from "@/theme/theme";
import { StyleSheet } from "react-native";


export const styles = (theme: Theme) =>
  StyleSheet.create({
    listContainer: {
      marginTop: theme.spacing.lg,
      flex: 1,
    },
  });