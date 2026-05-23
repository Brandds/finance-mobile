import { View, FlatList }
from "react-native";

import Typography
from "@/components/Typography/Typography";

import { styles } from "./styles";

import { categoriesMock }
from "../../mocks/home.mock";

import CategoryItem
from "@/components/CategoryItem";

export default function CategoriesSection() {

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

        <Typography variant="h2">
          Categorias
        </Typography>

        <Typography
          variant="body2"
          style={styles.seeAllText}
        >
          Ver todas
        </Typography>

      </View>

      {/* List */}
      <FlatList
        horizontal
        data={categoriesMock}
        keyExtractor={(item) =>
          item.id.toString()
        }
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <CategoryItem item={item} />
        )}
      />

    </View>
  );
}