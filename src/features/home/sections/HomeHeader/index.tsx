import { View, Pressable, Image }
from "react-native";

import { MaterialIcons }
from "@expo/vector-icons";

import Typography
from "@/components/Typography/Typography";

import { tokens }
from "@/theme/tokens";
import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/features/auth/form/types";
import { ROUTES } from "@/navigation/routes";
import { useAuthStore } from "@/store/auth/auth.store";


export default function HomeHeader() {

  const navigation = useNavigation<NavigationProps>();
  const user = useAuthStore(state => state.userResponse);

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
          color={tokens.colors.primary}
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
        <MaterialIcons
          name="notifications-none"
          size={24}
          color={tokens.colors.textSecondary}
        />
      </Pressable>

    </View>
  );
}