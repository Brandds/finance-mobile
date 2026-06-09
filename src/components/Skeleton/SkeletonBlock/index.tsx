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

import { styles } from "./styles";

import {
  SkeletonBlockProps,
} from "./types";

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
          duration: 1200,
          useNativeDriver: true,
        }
      )
    ).start();

  }, []);

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
            "transparent",
            "rgba(255,255,255,0.4)",
            "transparent",
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