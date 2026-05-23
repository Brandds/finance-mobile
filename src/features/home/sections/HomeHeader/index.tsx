import { View, Pressable, Image }
from "react-native";

import { MaterialIcons }
from "@expo/vector-icons";

import Typography
from "@/components/Typography/Typography";

import { tokens }
from "@/theme/tokens";
import { styles } from "./styles";


export default function HomeHeader() {

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
        >
          Financial Clarity
        </Typography>

      </View>

      <Pressable style={styles.button}>
        <MaterialIcons
          name="notifications-none"
          size={24}
          color={tokens.colors.textSecondary}
        />
      </Pressable>

    </View>
  );
}