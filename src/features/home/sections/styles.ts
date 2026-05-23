import { StyleSheet } from "react-native";

import { tokens } from "@/theme/tokens";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",

    left: 0,
    right: 0,
    bottom: 0,

    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-around",

    height: 84,

    paddingHorizontal: 16,
    paddingBottom: 16,

    borderTopWidth: 1,
    borderTopColor: "#E9EEF5",

    backgroundColor: "#FFFFFF",

    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,

    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: -4,
    },

    shadowOpacity: 0.05,
    shadowRadius: 12,

    elevation: 10,
  },

  tab: {
    alignItems: "center",
    justifyContent: "center",

    gap: 4,
  },

  activeLabel: {
    fontWeight: "700",
  },
});