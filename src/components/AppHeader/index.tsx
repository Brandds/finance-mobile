import { Pressable, View } from "react-native";


import { useNavigation } from "@react-navigation/native";

import Typography from "../Typography/Typography";

import { tokens } from "@/theme/tokens";
import { Icon } from "../Icon/Icon";
import { styles } from "./styles";

type Props = {
  title?: string;

  showBackButton?: boolean;
};

export default function AppHeader({
  title,
  showBackButton,
}: Props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {showBackButton && (
        <Pressable
          onPress={() => navigation.goBack()}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Icon
            name="arrow-back"
            size={24}
            color={tokens.colors.textSecondary}
          />
        </Pressable>
      )}

      {title && (
        <Typography
          variant="h2"
          color={tokens.colors.textSecondary}
        >
          {title}
        </Typography>
      )}
    </View>
  );
}