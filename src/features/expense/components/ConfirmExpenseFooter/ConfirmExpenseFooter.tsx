import { TouchableOpacity, View } from "react-native";

import { Button } from "@/components";
import Typography from "@/components/Typography/Typography";

import { useTheme } from "@/theme/ThemeProvider";

import { ConfirmExpenseFooterProps } from "./types";
import { styles as confirmExpenseFooterStyles } from "./styles";

export default function ConfirmExpenseFooter({
  loading = false,
  confirmText = "Adicionar gasto",
  cancelText = "Cancelar",
  onConfirm,
  onCancel,
}: ConfirmExpenseFooterProps) {

  const theme = useTheme();
  const styles = confirmExpenseFooterStyles(theme);

  return (
    <View style={styles.container}>

      <Button
        title={confirmText}
        loading={loading}
        onPress={onConfirm}
      />

      <TouchableOpacity
        style={styles.cancelButton}
        activeOpacity={0.7}
        onPress={onCancel}
      >
        <Typography
          variant="body1"
          color={theme.colors.textSecondary}
        >
          {cancelText}
        </Typography>
      </TouchableOpacity>

    </View>
  );
}