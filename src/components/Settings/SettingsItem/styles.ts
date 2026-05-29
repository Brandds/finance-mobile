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

  pressed: {
    opacity: 0.7,
  },

  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,

    flex: 1,
  },

  iconContainer: {
    width: 24,
    alignItems: "center",
  },

  rightContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  divider: {
    height: 1,
    marginLeft: 52,

    backgroundColor: "#E5E7EB",
  },
});
