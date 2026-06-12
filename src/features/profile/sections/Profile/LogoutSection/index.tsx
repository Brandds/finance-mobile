import { Pressable, View } from "react-native";


import Typography from "@/components/Typography/Typography";

import { Icon } from "@/components";
import { useTheme } from "@/theme/ThemeProvider";
import { styles as stylesLogoutSection } from "./styles";
import { LogoutSectionProps } from "./types";

export default function LogoutSection({
  onLogoutPress,
}: LogoutSectionProps) {

  const theme = useTheme();
  const styles = stylesLogoutSection(theme);

  return (
    <Pressable
      onPress={onLogoutPress}
      style={styles.container}
    >
      <View style={styles.content}>
        <Icon
          name="logout"
          size={20}
          color={theme.colors.error}
        />

        <Typography
          variant="body1"
          color={theme.colors.error}
        >
          Sair da conta
        </Typography>
      </View>
    </Pressable>
  );
}