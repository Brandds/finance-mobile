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

import AppHeader from "../AppHeader";

import { ScreenProps } from "./types";

import { tokens } from "@/theme/tokens";

import stylesScreen from "./styles";

const Screen = ({
  children,
  scrollable = false,
  padding = true,
  centered = false,

  backgroundColor = tokens.colors.background,

  headerTitle,
  showBackButton = false,
}: ScreenProps) => {
  const insets = useSafeAreaInsets();

  const content = (
    <View
      style={[
        stylesScreen.container,

        {
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
            paddingTop: insets.top,
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
          <View style={{ flex: 1 }}>
            {(headerTitle || showBackButton) && (
              <View style={stylesScreen.headerContainer}>
                <AppHeader
                  title={headerTitle}
                  showBackButton={showBackButton}
                />
              </View>
            )}

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
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default Screen;