import { TouchableOpacity, View } from "react-native";

import Typography from "@/components/Typography/Typography";
import { Icon } from "@/components";

import { useTheme } from "@/theme/ThemeProvider";

import { styles as expenseSuggestionsStyles } from "./styles";
import { ExpenseSuggestionsProps } from "./types";

export default function ExpenseSuggestions({
  suggestions,
  onSelect,
}: ExpenseSuggestionsProps) {
  const theme = useTheme();
  const styles = expenseSuggestionsStyles(theme);

  return (
    <View style={styles.container}>
      <Typography
        variant="body2"
        color={theme.colors.textSecondary}
        style={styles.title}
      >
        Sugestões baseadas no histórico
      </Typography>

      <View style={styles.chipsContainer}>
        {suggestions.map((suggestion) => (
          <TouchableOpacity
            key={suggestion.id}
            style={styles.chip}
            activeOpacity={0.7}
            onPress={() => onSelect(suggestion)}
          >
            <Icon
              name={suggestion.icon}
              size={18}
              color={theme.colors.onSecondary}
            />

            <Typography
              variant="body2"
              color={theme.colors.onSecondary}
              style={styles.chipText}
            >
              {`${suggestion.description} ${suggestion.amount}`}
            </Typography>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}