import React from "react";
import { View, FlatList } from "react-native";


import { styles } from "./styles";
import { CategorySuggestionListProps } from "./types";
import CategorySuggestionChip from "../CategorySuggestionChip";

export default function CategorySuggestionList({
  data,
  selectedId,
  onSelect,
}: CategorySuggestionListProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <CategorySuggestionChip
            id={item.id}
            label={item.label}
            selected={selectedId === item.id}
            onPress={onSelect}
          />
        )}
      />
    </View>
  );
}