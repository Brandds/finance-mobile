import { TouchableOpacity, View } from "react-native";

import Typography from "@/components/Typography/Typography";
import { Icon } from "@/components";

import { useTheme } from "@/theme/ThemeProvider";

import { styles as periodHeaderStyles } from "./styles";
import { PeriodHeaderProps } from "./types";

export default function PeriodHeader({
  title,
  period,
  onPrevious,
  onNext,
}: PeriodHeaderProps) {

  const theme = useTheme();
  const styles = periodHeaderStyles(theme);

  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>

        <Typography
          variant="h2"
          color={theme.colors.text}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          color={theme.colors.textSecondary}
          style={styles.period}
        >
          {period}
        </Typography>

      </View>

      <View style={styles.actions}>

        <TouchableOpacity
          style={styles.iconButton}
          activeOpacity={0.7}
          onPress={onPrevious}
        >
          <Icon
            name="chevron-left"
            size={24}
            color={theme.colors.text}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          activeOpacity={0.7}
          onPress={onNext}
        >
          <Icon
            name="chevron-right"
            size={24}
            color={theme.colors.text}
          />
        </TouchableOpacity>

      </View>

    </View>
  );
}