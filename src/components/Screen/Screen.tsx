import React, { useContext } from "react";

import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";

import {
  BottomTabBarHeightContext,
} from "@react-navigation/bottom-tabs";

import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import Header from "../Header";

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
  const tabBarHeight = useContext(BottomTabBarHeightContext) ?? 0;
  const theme = useTheme();
  const styles = stylesScreen(theme);

  const bottomSpacing = Math.max(
    insets.bottom + tabBarHeight,
    theme.spacing.screenPaddingBottom,
  );
  const screenBackground =
    backgroundColor ?? theme.colors.background;
  const content = (
    <View
      style={[
        scrollable ? {} : styles.container,

        {
          paddingBottom: bottomSpacing,
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
            paddingTop: 40,
            paddingBottom: bottomSpacing,
          },
        ]}
        behavior={
          Platform.OS === "ios"
            ? "padding"
            : undefined
        }
      >
        <View style={{ flex: 1 }}>
          {/* {(headerTitle || showBackButton) && (
            <View style={styles.headerContainer}>
              <Header
                title={headerTitle}
                showBackButton={showBackButton}
              />
            </View>
          )} */}

          {scrollable ? (
            <ScrollView
              style={styles.content}
              keyboardShouldPersistTaps="handled"
              contentInsetAdjustmentBehavior="never"
              automaticallyAdjustContentInsets={false}
              showsVerticalScrollIndicator={false}
              nestedScrollEnabled={true}
              scrollEventThrottle={16}
              directionalLockEnabled={false}
              contentContainerStyle={[
                padding && styles.padding,
                {
                  flexGrow: 1,
                  paddingBottom: bottomSpacing,
                },
              ]}
            >
              {children}
            </ScrollView>
          ) : (
            content
          )}
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Screen;