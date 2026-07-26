import { View } from "react-native";

import Typography from "@/components/Typography/Typography";

import { useTheme } from "@/theme/ThemeProvider";

import CategorySummary from "../CategorySummary";

import { CategorySummarySectionProps } from "./types";
import { styles as categorySummarySectionStyles } from "./styles";


export default function CategorySummarySection({
  categories,
}: CategorySummarySectionProps) {

  const theme = useTheme();
  const styles = categorySummarySectionStyles(theme);


  return (

    <View style={styles.container}>


      <Typography
        variant="h2"
        color={theme.colors.text}
        style={styles.title}
      >
        Categorias
      </Typography>


      <View style={styles.grid}>

        {
          categories.map((category) => (

            <CategorySummary
              key={category.id}
              {...category}
            />

          ))
        }

      </View>


    </View>

  );
}