import { Pressable, View } from "react-native";


import { useNavigation } from "@react-navigation/native";

import Typography from "../Typography/Typography";

import { Icon } from "../Icon/Icon";
import { styles } from "./styles";
import { useTheme } from "@/theme/ThemeProvider";

type Props = {
  title?: string;

  showBackButton?: boolean;
};

export default function AppHeader({
  title,
  showBackButton,
}: Props) {
  const navigation = useNavigation();

  const theme = useTheme();
  const style = styles(theme);

  return (
    <View style={style.container}>
      {showBackButton && (
        <Pressable
          onPress={() => navigation.goBack()}
          style={({ pressed }) => [
            style.button,
            pressed && style.buttonPressed,
          ]}
        >
          <Icon
            name="arrow-back"
            size={24}
            color={theme.colors.textSecondary}
          />
        </Pressable>
      )}

      {title && (
        <Typography
          variant="h2"
          color={theme.colors.textSecondary}
        >
          {title}
        </Typography>
      )}
    </View>
  );
}