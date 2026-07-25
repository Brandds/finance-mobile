import { TouchableOpacity, View } from "react-native";

import Typography from "@/components/Typography/Typography";
import { Icon } from "@/components";

import { useTheme } from "@/theme/ThemeProvider";

import { styles as monthHeaderStyles } from "./styles";
import { MonthHeaderProps } from "./types";

export default function MonthHeader({
  selectedMonth,
  onMonthPress,
  onFilterPress,
  onSearchPress,
}: MonthHeaderProps) {
  const theme = useTheme();
  const styles = monthHeaderStyles(theme);

  const month = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
  }).format(selectedMonth);

  const formattedMonth =
    month.charAt(0).toUpperCase() + month.slice(1);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.monthButton}
        activeOpacity={0.7}
        onPress={onMonthPress}
      >
        <Typography
          variant="h1"
          color={theme.colors.primary}
          style={styles.monthText}
        >
          {formattedMonth}
        </Typography>

        <Icon
          name="keyboard-arrow-down"
          size={24}
          color={theme.colors.primary}
        />
      </TouchableOpacity>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.actionButton}
          activeOpacity={0.7}
          onPress={onFilterPress}
        >
          <Icon
            name="filter-list"
            size={22}
            color={theme.colors.primary}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          activeOpacity={0.7}
          onPress={onSearchPress}
        >
          <Icon
            name="search"
            size={22}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}