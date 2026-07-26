import { TouchableOpacity, View } from "react-native";

import { Icon } from "@/components";
import Typography from "@/components/Typography/Typography";

import { useTheme } from "@/theme/ThemeProvider";

import { styles as expenseDetailsActionStyles } from "./styles";
import { ExpenseDetailsActionProps } from "./types";

export default function ExpenseDetailsAction({
  onPress,
}: ExpenseDetailsActionProps) {
  const theme = useTheme();
  const styles = expenseDetailsActionStyles(theme);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={styles.leftContainer}>
        <Icon
          name="tune"
          size={22}
          color={theme.colors.onSecondary}
        />

        <View style={styles.content}>
          <Typography
            variant="body1"
            color={theme.colors.text}
          >
            Adicionar detalhes
          </Typography>

          <Typography
            variant="body2"
            color={theme.colors.textSecondary}
          >
            Categoria, data e observações
          </Typography>
        </View>
      </View>

      <Icon
        name="chevron-right"
        size={24}
        color={theme.colors.textSecondary}
      />
    </TouchableOpacity>
  );
}