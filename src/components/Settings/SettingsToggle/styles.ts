import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    minHeight: 60,

    paddingHorizontal: 16,
    paddingVertical: 14,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  leftContent: {
    flex: 1,

    flexDirection: "row",
    alignItems: "center",

    gap: 12,
  },

  iconContainer: {
    width: 24,
    alignItems: "center",
  },

  divider: {
    height: 1,
    marginLeft: 52,

    backgroundColor: "#E5E7EB",
  },
});