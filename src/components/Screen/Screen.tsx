import React from "react";

import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar
} from "react-native";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

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

        padding &&
        stylesScreen.padding,

        centered &&
        stylesScreen.centered,
      ]}
    >
      {children}
    </View>
  );

  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor={tokens.colors.primary}
        barStyle="dark-content"
      />

      <SafeAreaView
        edges={["top", "bottom"]}
        style={[
          stylesScreen.container,
          {
            backgroundColor
          },
        ]}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}

          behavior={
            Platform.OS === "ios"
              ? "padding"
              : "height"
          }
        >
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
          >
            {scrollable ? (
              <ScrollView
                keyboardShouldPersistTaps="handled"

                contentContainerStyle={{
                  flexGrow: 1,
                }}

                showsVerticalScrollIndicator={
                  false
                }
              >
                {content}
              </ScrollView>
            ) : (
              content
            )}
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default Screen;