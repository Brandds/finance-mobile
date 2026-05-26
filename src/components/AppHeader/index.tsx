import { Pressable, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import Typography from "../Typography/Typography";
import { styles } from "./styles";
import { tokens } from "@/theme/tokens";


type Props = {
  title: string;
};

export default function AppHeader({
  title,
}: Props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <MaterialIcons
          name="arrow-back"
          size={24}
          color={tokens.colors.text}
        />
      </Pressable>

      <Typography
        variant="h2"
        color={tokens.colors.text}
      >
        {title}
      </Typography>
    </View>
  );
}