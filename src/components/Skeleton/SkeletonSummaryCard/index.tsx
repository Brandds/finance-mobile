import React from "react";

import { View } from "react-native";

import SkeletonBlock
from "../SkeletonBlock";

import { styles }
from "./styles";

export default function SkeletonSummaryCard() {
  return (
    <View style={styles.container}>

      {/* Título */}
      <SkeletonBlock
        width="40%"
        height={14}
        style={styles.title}
      />

      {/* Valor principal */}
      <SkeletonBlock
        width="60%"
        height={32}
        style={styles.value}
      />

      {/* Informação inferior */}
      <View style={styles.footer}>

        <SkeletonBlock
          width={16}
          height={16}
          borderRadius={8}
        />

        <SkeletonBlock
          width="35%"
          height={12}
          style={styles.info}
        />

      </View>

    </View>
  );
}