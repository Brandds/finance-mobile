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

import stylesScreen from "./styles";
import { useTheme } from "@/theme/ThemeProvider";

const Screen = ({
  children,
  scrollable = false,
  padding = true,
  centered = false,

  backgroundColor,

  headerTitle,
  showBackButton = false,
}: ScreenProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const styles = stylesScreen(theme);

  const screenBackground =
    backgroundColor ?? theme.colors.background;
  const content = (
    <View
      style={[
        styles.container,

        {
          paddingBottom: insets.bottom,
        },

        padding &&
        styles.padding,

        centered &&
        styles.centered,
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
          styles.container,
          {
            backgroundColor: screenBackground,
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
              <View style={styles.headerContainer}>
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