import { Pressable, View } from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import Typography from "@/components/Typography/Typography";
import { tokens } from "@/theme/tokens";

import { LogoutSectionProps } from "./types";
import { styles } from "./styles";

export default function LogoutSection({
  onLogoutPress,
}: LogoutSectionProps) {
  return (
    <Pressable
      onPress={onLogoutPress}
      style={styles.container}
    >
      <View style={styles.content}>
        <MaterialIcons
          name="logout"
          size={20}
          color={tokens.colors.error}
        />

        <Typography
          variant="body1"
          color={tokens.colors.error}
        >
          Sair da conta
        </Typography>
      </View>
    </Pressable>
  );
}