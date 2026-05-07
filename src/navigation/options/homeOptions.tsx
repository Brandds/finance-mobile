import { tokens } from "@/theme/tokens";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const homeOptions = {
  header: () => (
    <SafeAreaView
      edges={["top"]}
      style={{
        backgroundColor: tokens.colors.primary,
        ...tokens.shadows.level1,
      }}
    >
      <View
        style={{
          height: 80,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: tokens.colors.onPrimary,
            ...tokens.typography.h1,
          }}
        >
          Finance App
        </Text>
      </View>
    </SafeAreaView>
  ),
};

export default homeOptions;