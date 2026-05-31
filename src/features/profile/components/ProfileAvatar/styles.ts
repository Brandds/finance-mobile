import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    position: "relative",
  },

  avatarContainer: {
    overflow: "hidden",
    backgroundColor: "#E5E7EB",

    justifyContent: "center",
    alignItems: "center",
  },

  fallback: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },

  editButton: {
    position: "absolute",

    right: 0,
    bottom: 0,

    width: 32,
    height: 32,

    borderRadius: 16,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#2563EB",
  },
});