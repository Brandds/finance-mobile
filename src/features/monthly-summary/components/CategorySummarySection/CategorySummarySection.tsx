import { View } from "react-native";

import Typography from "@/components/Typography/Typography";

import { useTheme } from "@/theme/ThemeProvider";

import CategorySummary from "../CategorySummary";

import { SkeletonSummaryCard } from "@/components/Skeleton";
import { styles as categorySummarySectionStyles } from "./styles";
import { CategorySummarySectionProps } from "./types";


export default function CategorySummarySection({
  categories,
  loading = false,
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

        {loading
          ? [0, 1, 2].map((index) => <SkeletonSummaryCard key={index} />)
          : categories.map((category) => <CategorySummary key={category.id} {...category} />)}

      </View>

      {!loading && categories.length === 0 && (
        <Typography variant="body2" color={theme.colors.textSecondary}>
          Nenhuma categoria com gastos neste período.
        </Typography>
      )}


    </View>

  );
}
