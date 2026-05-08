import React from "react";

import {
  View,
  ScrollView
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { ScreenProps } from "./types";

import { tokens } from "@/theme/tokens";
import stylesScreen from "./styles";

const Screen = ({
  children,
  scrollable = false,
  padding = true,
  centered = false,
  backgroundColor = tokens.colors.background,
}: ScreenProps) => {
  const content = (
    <View
      style={[
        stylesScreen.container,
        padding && stylesScreen.padding,
        centered && stylesScreen.centered,
      ]}
    >
      {children}
    </View>
  );

  return (
    <SafeAreaView
      edges={["top", "bottom"]}
      style={[
        stylesScreen.container,
        {
          backgroundColor,
        },
      ]}
    >
      {scrollable ? (
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          {content}
        </ScrollView>
      ) : (
        content
      )}
    </SafeAreaView>
  );
};


export default Screen;