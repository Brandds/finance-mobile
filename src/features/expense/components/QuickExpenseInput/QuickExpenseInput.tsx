import { TextInput, View } from "react-native";

import { Card, Icon } from "@/components";
import Typography from "@/components/Typography/Typography";

import { useTheme } from "@/theme/ThemeProvider";

import { styles as quickExpenseInputStyles } from "./styles";
import { QuickExpenseInputProps } from "./types";

export default function QuickExpenseInput({
  value,
  description,
  amount,
  placeholder = "Ex: padaria 14",
  onChangeText,
}: QuickExpenseInputProps) {

  const theme = useTheme();
  const styles = quickExpenseInputStyles(theme);

  return (
    <Card style={styles.container}>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textSecondary}
        style={styles.input}
      />

      <View style={styles.divider} />

      <View style={styles.infoContainer}>

        <View style={styles.infoRow}>

          <Icon
            name="description"
            size={20}
            color={theme.colors.onSecondary}
          />

          <View style={styles.infoContent}>

            <Typography
              variant="body2"
              color={theme.colors.textSecondary}
            >
              Descrição
            </Typography>

            <Typography
              variant="body1"
              color={theme.colors.text}
            >
              {description || "-"}
            </Typography>

          </View>

        </View>

        <View style={styles.infoRow}>

          <Icon
            name="payments"
            size={20}
            color={theme.colors.onSecondary}
          />

          <View style={styles.infoContent}>

            <Typography
              variant="body2"
              color={theme.colors.textSecondary}
            >
              Valor
            </Typography>

            <Typography
              variant="body1"
              color={theme.colors.text}
            >
              {amount || "-"}
            </Typography>

          </View>

        </View>

      </View>

    </Card>
  );
}