import { StyleSheet }
from "react-native";

import { tokens }
from "@/theme/tokens";

export const styles = StyleSheet.create({

  container: {
    height: 72,

    paddingHorizontal: 20,

    flexDirection: "column",

    alignItems: "center",

    justifyContent: "space-between",

    backgroundColor:
      tokens.colors.surface,

    borderBottomWidth: 1,

    borderBottomColor:
      "#EEF2F5",
  },
  iconContainer: {
    width: 60,
    height: 40,

    borderRadius: 8,

    alignItems: "center",
    justifyContent: "center",
  },
});