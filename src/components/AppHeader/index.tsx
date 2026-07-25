import { Image, Pressable, View } from "react-native";


import Typography from "@/components/Typography/Typography";

import { styles as stylesHomeHeader } from "./styles";

import { Icon } from "@/components";
import { NavigationProps } from "@/features/auth/form/types";
import { ROUTES } from "@/navigation/routes";
import { useAuthStore } from "@/store/auth/auth.store";
import { useTheme } from "@/theme/ThemeProvider";
import { useNavigation } from "@react-navigation/native";


export default function AppHeader() {

  const navigation = useNavigation<NavigationProps>();
  const user = useAuthStore(state => state.userResponse);
  const theme = useTheme();
  const styles = stylesHomeHeader(theme);


  const handlerNotificationPress = () => {
    navigation.navigate(ROUTES.NOTIFICATIONS);
  }

  const handlerUserPress = () => {
    navigation.navigate(ROUTES.PROFILE);
  }

  return (
    <View style={styles.container}>

      <View style={styles.left}>

        <Image
          source={{
            uri: "https://i.pravatar.cc/150",
          }}
          style={styles.avatar}
        />

        <Typography
          variant="h2"
          color={theme.colors.textSecondary}
          onPress={handlerUserPress}
        >
          {user?.name || "Financial Clarity"}
        </Typography>

      </View>

      <Pressable 
        onPress={handlerNotificationPress}
        android_ripple={{ color: "#D1D5DB", borderless: true }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Icon
          name="notifications-none"
          size={24}
          color={theme.colors.onPrimary}
        />
      </Pressable>

    </View>
  );
}