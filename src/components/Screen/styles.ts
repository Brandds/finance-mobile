import { Theme } from "@/theme/theme";
import { StyleSheet } from "react-native";

const stylesScreen = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
    },
    padding: {
      padding: theme.spacing.screenPadding,
    },
    centered: {
      justifyContent: "center",
    },
    headerContainer: {
      paddingHorizontal: 20,
    },
  });

export default stylesScreen;