import { Pressable, View } from "react-native";
import ProfileAvatar from "@/features/profile/components/Profile/ProfileAvatar";


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

        <ProfileAvatar imageUrl={user?.displayPicture ?? undefined} initials={user?.name?.trim().split(/\s+/).slice(0, 2).map(part => part[0]).join("").toUpperCase()} size={40} />

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
