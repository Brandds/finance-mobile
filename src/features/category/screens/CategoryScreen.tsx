import { useState } from "react";
import { FlatList, View } from "react-native";

import { Icon } from "@/components";
import Screen from "@/components/Screen/Screen";

import AppHeader from "@/components/AppHeader";
import { CategoryCard } from "../components/CategoryCard";
import CategoryFab from "../components/CategoryFab";
import { CategorySearch } from "../components/CategorySearch";
import CategorySuggestionList from "../components/CategorySuggestionList";
import { styles } from "../styles";

const suggestions = [
    { id: "food", label: "Alimentação" },
    { id: "transport", label: "Transporte" },
    { id: "market", label: "Mercado" },
    { id: "leisure", label: "Lazer" },
];

const categories = [
    {
        id: "1",
        title: "Alimentação",
        transactions: 12,
        icon: "restaurant",
        color: "#F97316",
    },
    {
        id: "2",
        title: "Transporte",
        transactions: 8,
        icon: "directions-car",
        color: "#2563EB",
    },
    {
        id: "3",
        title: "Lazer",
        transactions: 5,
        icon: "celebration",
        color: "#9333EA",
    },
];

export default function CategoryScreen() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    function handleSearch() { }

    function handleAddCategory() { }

    return (
        <Screen
        >
            <AppHeader/>
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={() => (
                    <View style={styles.separator} />
                )}
                ListHeaderComponent={
                    <>
                        <CategorySearch onAddPress={handleSearch} />

                        <CategorySuggestionList
                            data={suggestions}
                            selectedId={selectedCategory}
                            onSelect={setSelectedCategory}
                        />
                    </>
                }
                renderItem={({ item }) => (
                    <CategoryCard
                        title={item.title}
                        transactions={item.transactions}
                        icon={item.icon}
                        iconColor="white"
                        iconBackgroundColor={item.color}
                    />
                )}
            />

            <CategoryFab
                onPress={handleAddCategory}
                icon={
                    <Icon
                        library="material"
                        name="add"
                        size={28}
                        color="#FFF"
                    />
                }
            />
        </Screen>
    );
}