import { View, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Typography from "@/components/Typography/Typography";
import { styles } from "../styles";
import { tokens } from "@/theme/tokens";


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
            color={tokens.colors.text}
          >
            {props.title}
          </Typography>

          <Typography
            variant="body2"
            color={tokens.colors.text}
          >
            {props.time}
          </Typography>
        </View>

        <Typography
          variant="body2"
          color={tokens.colors.text}
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