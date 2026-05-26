import { tokens } from "@/theme/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 24,
  },

  button: {
    width: 42,
    height: 42,
    borderRadius: 999,
    backgroundColor: tokens.colors.surfaceSecondary,

    alignItems: "center",
    justifyContent: "center",
  },

  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.95 }],
  },
});