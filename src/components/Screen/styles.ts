import { tokens } from "@/theme/tokens";
import { StyleSheet } from "react-native";

const stylesScreen = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  padding: {
    padding: tokens.spacing.screenPadding,
  },
  centered: {
    justifyContent: "center",
  },
});

export default stylesScreen;