import { Pressable } from "react-native";



import { Icon } from "@/components";
import { useTheme } from "@/theme/ThemeProvider";
import { styles as stylesFloatingButton } from "./styles";

type FloatingButtonProps = {
  onPress?: () => void;
};

export default function FloatingButton({
  onPress,
}: FloatingButtonProps) {
  const theme = useTheme();
  const styles = stylesFloatingButton(theme);

  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
    >
      <Icon
        name="add"
        size={32}
        color={theme.colors.onPrimary}
      />
    </Pressable>
  );
}