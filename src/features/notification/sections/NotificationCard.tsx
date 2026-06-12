import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

import Typography from "@/components/Typography/Typography";
import { useTheme } from "@/theme/ThemeProvider";
import { styles as stylesNotificationCard } from "../styles";


type Props = {
  title: string;
  description: string;
  time: string;
  icon: keyof typeof MaterialIcons.glyphMap;

  iconColor: string;
  iconBackground: string;

  unread?: boolean;
};

export default function NotificationCard(props: Props) {

  const theme = useTheme();
  const styles = stylesNotificationCard(theme);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
    >
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: props.iconBackground,
          },
        ]}
      >
        <MaterialIcons
          name={props.icon}
          size={22}
          color={props.iconColor}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <Typography
            variant="body1"
            color={theme.colors.text}
          >
            {props.title}
          </Typography>

          <Typography
            variant="body2"
            color={theme.colors.text}
          >
            {props.time}
          </Typography>
        </View>

        <Typography
          variant="body2"
          color={theme.colors.text}
        >
          {props.description}
        </Typography>
      </View>

      {props.unread && (
        <View style={styles.unreadDot} />
      )}
    </Pressable>
  );
}