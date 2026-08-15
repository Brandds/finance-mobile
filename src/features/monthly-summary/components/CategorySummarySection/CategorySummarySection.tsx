import { View } from "react-native";

import Typography from "@/components/Typography/Typography";

import { useTheme } from "@/theme/ThemeProvider";

import CategorySummary from "../CategorySummary";

import { SkeletonSummaryCard } from "@/components/Skeleton";
import { useEffect, useState } from "react";
import { styles as categorySummarySectionStyles } from "./styles";
import { CategorySummarySectionProps } from "./types";


export default function CategorySummarySection({
  categories,
}: CategorySummarySectionProps) {
  const [loading, setLoading] = useState<boolean>(true);

  const theme = useTheme();
  const styles = categorySummarySectionStyles(theme);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


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

            loading ? (
              <SkeletonSummaryCard key={category.id}/>
            ) : (
              <CategorySummary
              key={category.id}
              {...category}
            />
            )

          ))
        }

      </View>


    </View>

  );
}