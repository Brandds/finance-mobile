import { tokens } from "@/theme/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    gap: 4,
  },

  card: {
    backgroundColor: tokens.colors.background,
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    gap: 16,
    position: "relative",
    borderWidth: 1,
    borderColor: tokens.colors.borderOnSecondary,
  },

  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },

  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: "#14B8A6",
    position: "absolute",
    top: 16,
    right: 16,
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
    marginTop: 8,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#334155",
  },
});