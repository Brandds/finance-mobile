import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",

    top: 60,
    left: 16,
    right: 16,

    borderRadius: 16,

    paddingHorizontal: 16,
    paddingVertical: 14,

    flexDirection: "row",
    alignItems: "center",

    elevation: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,

    zIndex: 9999,
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  message: {
    fontSize: 14,
    color: "#FFFFFF",
    marginTop: 2,
  },

  iconContainer: {
    marginRight: 12,
  },
});