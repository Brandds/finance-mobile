import { useMemo, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { Icon } from "@/components";
import { Button } from "@/components/Button/Button";
import Screen from "@/components/Screen/Screen";
import AppHeader from "@/components/AppHeader";
import Typography from "@/components/Typography/Typography";
import { useTheme } from "@/theme/ThemeProvider";
import { CategoryCard } from "../components/CategoryCard";
import CategoryFab from "../components/CategoryFab";
import { CategorySearch } from "../components/CategorySearch";
import CategorySuggestionList from "../components/CategorySuggestionList";
import CategoryForm from "../components/CategoryForm";
import { useCategories } from "../hooks/useCategories";
import { Category, categoryIcons } from "../types";
import { styles as createStyles } from "../styles";

const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().trim();

export default function CategoryScreen() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { categories, loading, error, refetch, save, remove } = useCategories();
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [editor, setEditor] = useState<{ category: Category | null } | null>(null);
  const filtered = useMemo(() => categories.filter(item =>
    normalize(item.name).includes(normalize(search)) && (!selectedId || String(item.id) === selectedId)
  ), [categories, search, selectedId]);

  return (
    <Screen>
      <AppHeader />
      <FlatList
        data={filtered}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        refreshing={loading}
        onRefresh={refetch}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={<>
          <CategorySearch onSearch={setSearch} />
          <CategorySuggestionList
            data={categories.map(item => ({ id: String(item.id), label: item.name }))}
            selectedId={selectedId}
            onSelect={id => setSelectedId(current => current === id ? null : id)}
          />
          {error && <View style={styles.feedback}>
            <Typography color={theme.colors.error}>{error}</Typography>
            <Button title="Tentar novamente" onPress={refetch} />
          </View>}
        </>}
        ListEmptyComponent={<View style={styles.feedback}>
          {loading ? <ActivityIndicator color={theme.colors.primary} accessibilityLabel="Carregando categorias" />
            : !error && <Typography>{categories.length ? "Nenhuma categoria encontrada para os filtros." : "Você ainda não tem categorias. Toque em + para criar."}</Typography>}
        </View>}
        renderItem={({ item }) => <CategoryCard
          title={item.name}
          icon={item.icon ? categoryIcons[item.icon]?.icon ?? "category" : "category"}
          iconColor={theme.colors.onPrimary}
          iconBackgroundColor={theme.colors.primary}
          onPress={() => setEditor({ category: item })}
        />}
      />
      <CategoryFab onPress={() => setEditor({ category: null })} icon={<Icon name="add" size={28} color={theme.colors.onPrimary} />} />
      {editor && <CategoryForm
        category={editor.category}
        onClose={() => setEditor(null)}
        onSave={async (payload, id) => { await save(payload, id); setSearch(""); setSelectedId(null); }}
        onDelete={async id => { await remove(id); setSelectedId(null); }}
      />}
    </Screen>
  );
}
