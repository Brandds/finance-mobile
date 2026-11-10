import { View, FlatList, Pressable } from "react-native";
import Typography from "@/components/Typography/Typography";
import CategoryItem from "@/components/CategoryItem";
import { Category, categoryIcons } from "@/features/category/types";
import { useTheme } from "@/theme/ThemeProvider";
import { styles as stylesCategoriesSection } from "./styles";

export default function CategoriesSection({ categories, onSeeAll }: { categories: Category[]; onSeeAll: () => void }) {
  const theme = useTheme();
  const styles = stylesCategoriesSection(theme);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography variant="h2">Categorias</Typography>
        <Pressable onPress={onSeeAll} accessibilityRole="button" accessibilityLabel="Ver todas as categorias" style={styles.link}>
          <Typography variant="body2" color={theme.colors.primary}>Ver todas</Typography>
        </Pressable>
      </View>
      <FlatList horizontal data={categories} keyExtractor={(item) => String(item.id)} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Typography>Nenhuma categoria cadastrada.</Typography>}
        renderItem={({ item }) => <CategoryItem item={{ title: item.name, icon: item.icon ? categoryIcons[item.icon]?.icon ?? "category" : "category", background: theme.colors.background, color: theme.colors.primary }} />}
      />
    </View>
  );
}
