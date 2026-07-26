import { View } from "react-native";


import { Icon } from "@/components";
import Typography from "@/components/Typography/Typography";

import { useTheme } from "@/theme/ThemeProvider";


import { InsightCardProps } from "./types";
import { styles as insightCardStyles } from "./styles";


export default function InsightCard({
  title = "Insight do Mês",
  description,
}: InsightCardProps) {


  const theme = useTheme();

  const styles = insightCardStyles(theme);


  return (

    <View style={styles.container}>


      <View style={styles.content}>


        <Typography
          variant="h2"
          color={theme.colors.onPrimary}
        >
          {title}
        </Typography>



        <Typography
          variant="body2"
          color={theme.colors.onPrimary}
          style={styles.description}
        >
          {description}
        </Typography>


      </View>



      <View style={styles.iconContainer}>

        <Icon
          name="insights"
          library="material"
          size={100}
          color={theme.colors.onPrimary}
        />

      </View>


    </View>

  );

}