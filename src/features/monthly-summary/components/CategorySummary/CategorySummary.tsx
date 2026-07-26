import { View } from "react-native";

import { Card, Icon } from "@/components";
import Typography from "@/components/Typography/Typography";

import { useTheme } from "@/theme/ThemeProvider";

import { CategorySummaryProps } from "./types";
import { styles as categorySummaryStyles } from "./styles";


export default function CategorySummary({
  title,
  amount,
  percentage,
  icon,
  color,
}: CategorySummaryProps) {

  const theme = useTheme();
  const styles = categorySummaryStyles(theme);


  return (

    <Card style={styles.container}>

      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: `${color}20`,
          },
        ]}
      >

        <Icon
          name={icon}
          library="material"
          size={24}
          color={color}
        />

      </View>


      <Typography
        variant="h2"
        color={theme.colors.text}
        style={styles.title}
      >
        {title}
      </Typography>


      <Typography
        variant="body2"
        color={theme.colors.textSecondary}
        style={styles.amount}
      >
        {amount}
      </Typography>


      <View
        style={[
          styles.progressBackground,
          {
            backgroundColor: theme.colors.border,
          },
        ]}
      >

        <View
          style={[
            styles.progress,
            {
              width: `${percentage}%`,
              backgroundColor: color,
            },
          ]}
        />

      </View>


      <Typography
        variant="body2"
        color={color}
        style={styles.percentage}
      >
        {percentage}% DO TOTAL
      </Typography>


    </Card>

  );
}