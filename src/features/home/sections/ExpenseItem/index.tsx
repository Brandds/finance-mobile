import { View } from "react-native";

import { MaterialIcons }
from "@expo/vector-icons";

import Typography
from "@/components/Typography/Typography";

import { tokens }
from "@/theme/tokens";

import { styles } from "./styles";

interface ExpenseItemProps {
  description: string;
  amount: string;
  date: string;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export default function ExpenseItem({
  description,
  amount,
  date,
  icon,
}: ExpenseItemProps) {

  return (
    <View style={styles.container}>

      <View style={styles.left}>

        <View style={styles.iconContainer}>
          <MaterialIcons
            name={icon}
            size={20}
            color={tokens.colors.textSecondary}
          />
        </View>

        <View style={styles.content}>

          <Typography
            variant="body1"
            color={tokens.colors.primary}
          >
            {description}
          </Typography>

          <Typography
            variant="body2"
            color={tokens.colors.textSecondary}
          >
            {date}
          </Typography>

        </View>

      </View>

      <Typography
        variant="body1"
        color={tokens.colors.primary}
      >
        {amount}
      </Typography>

    </View>
  );
}