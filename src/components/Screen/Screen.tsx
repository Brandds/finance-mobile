import React from "react";

import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from "react-native";

import {
  useSafeAreaInsets,
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

  const insets = useSafeAreaInsets();

  const content = (
    <View
      style={[
        stylesScreen.container,

        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },

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
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <KeyboardAvoidingView
        style={[
          stylesScreen.container,
          {
            backgroundColor,
          },
        ]}
        behavior={
          Platform.OS === "ios"
            ? "padding"
            : undefined
        }
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
        >
          {scrollable ? (
            <ScrollView
              keyboardShouldPersistTaps="handled"
              contentInsetAdjustmentBehavior="never"
              automaticallyAdjustContentInsets={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                flexGrow: 1,
              }}
            >
              {content}
            </ScrollView>
          ) : (
            content
          )}
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default Screen;