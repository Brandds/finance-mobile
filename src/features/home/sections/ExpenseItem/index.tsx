import { View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import Typography from "@/components/Typography/Typography";


import { useTheme } from "@/theme/ThemeProvider";
import { styles as stylesExpense } from "./styles";
import { Icon } from "@/components";

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

  const theme = useTheme();
  const styles = stylesExpense(theme);
  return (
    <View style={styles.container}>

      <View style={styles.left}>

        <View style={styles.iconContainer}>
          <Icon
            name={icon}
            size={20}
            color={theme.colors.textSecondary}
          />
        </View>

        <View style={styles.content}>

          <Typography
            variant="body1"
            color={theme.colors.text}
          >
            {description}
          </Typography>

          <Typography
            variant="body2"
            color={theme.colors.textSecondary}
          >
            {date}
          </Typography>

        </View>

      </View>

      <Typography
        variant="body1"
        color={theme.colors.text}
      >
        {amount}
      </Typography>

    </View>
  );
}