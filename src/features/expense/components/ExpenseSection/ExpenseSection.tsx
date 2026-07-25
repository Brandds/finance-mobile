import { View } from "react-native";

import Typography from "@/components/Typography/Typography";

import { useTheme } from "@/theme/ThemeProvider";

import { styles as expenseSectionStyles } from "./styles";
import { ExpenseSectionProps } from "./types";

export default function ExpenseSection({
  title,
  total,
  children,
}: ExpenseSectionProps) {

  const theme = useTheme();
  const styles = expenseSectionStyles(theme);

  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <Typography
          variant="h2"
          color={theme.colors.text}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          color={theme.colors.textSecondary}
        >
          {total}
        </Typography>

      </View>

      <View style={styles.content}>
        {children}
      </View>

    </View>
  );
}