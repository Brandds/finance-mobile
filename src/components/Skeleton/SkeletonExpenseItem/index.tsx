import React from "react";

import { View } from "react-native";

import SkeletonBlock
from "../SkeletonBlock";

import { styles }
from "./styles";

export default function SkeletonExpenseItem() {
  return (
    <View style={styles.container}>

      {/* Ícone */}
      <SkeletonBlock
        width={48}
        height={48}
        borderRadius={24}
      />

      {/* Descrição e data */}
      <View style={styles.content}>

        <SkeletonBlock
          width="70%"
          height={16}
        />

        <SkeletonBlock
          width="40%"
          height={12}
          style={styles.subtitle}
        />

      </View>

      {/* Valor */}
      <SkeletonBlock
        width={80}
        height={16}
      />

    </View>
  );
}