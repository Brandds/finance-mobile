import React, {
  useEffect,
  useRef,
} from "react";

import {
  Animated,
  View,
} from "react-native";

import {
  LinearGradient,
} from "expo-linear-gradient";

import { styles as stylesSkeletonBlock } from "./styles";

import {
  SkeletonBlockProps,
} from "./types";
import { skeletonTheme } from "../SkeletonTheme";
import { useTheme } from "@/theme/ThemeProvider";

export default function SkeletonBlock({
  width,
  height,
  borderRadius = 8,
  style,
}: SkeletonBlockProps) {

  const translateX =
    useRef(
      new Animated.Value(-200)
    ).current;

  useEffect(() => {

    Animated.loop(
      Animated.timing(
        translateX,
        {
          toValue: 200,
          duration: skeletonTheme.duration,
          useNativeDriver: true,
        }
      )
    ).start();

  }, []);
  const theme = useTheme();
  const styles = stylesSkeletonBlock(theme);
  return (
    <View
      style={[
        styles.container,
        {
          width,
          height,
          borderRadius,
        },
        style,
      ]}
    >
      <Animated.View
        style={{
          flex: 1,
          transform: [
            {
              translateX,
            },
          ],
        }}
      >
        <LinearGradient
          colors={[
            ...skeletonTheme.shimmer
          ]}
          start={{
            x: 0,
            y: 0,
          }}
          end={{
            x: 1,
            y: 0,
          }}
          style={styles.shimmer}
        />
      </Animated.View>
    </View>
  );
}