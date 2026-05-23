import { Pressable } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { tokens } from "@/theme/tokens";

import { styles } from "./styles";

type FloatingButtonProps = {
  onPress?: () => void;
};

export default function FloatingButton({
  onPress,
}: FloatingButtonProps) {
  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
    >
      <MaterialIcons
        name="add"
        size={32}
        color={tokens.colors.onPrimary}
      />
    </Pressable>
  );
}