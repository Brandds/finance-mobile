import Screen from "@/components/Screen/Screen";
import { Alert, ScrollView, Text } from "react-native";
import { CategoryCard } from "../components/CategoryCard";
import { CategorySearch } from "../components/CategorySearch";
import CategorySuggestionChip from "../components/CategorySuggestionChip";
import { useState } from "react";

type Category = {
    id: string;
    label: string;
};

const categories: Category[] = [
    { id: "food", label: "Alimentação" },
    { id: "transport", label: "Transporte" },
    { id: "market", label: "Mercado" },
    { id: "leisure", label: "Lazer" },
];

export default function CategoryScreen() {


    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    function handleSelectCategory(id: string) {
        setSelectedCategory(id);
    }


    const handleSearch = () => {
        alert("Teste");
    }

    return (
        <Screen >
            <Text>Teste</Text>
            <CategoryCard
                title="Teste"
                transactions={2}
                icon="celebration"
                iconColor="black"
                iconBackgroundColor="white"
            ></CategoryCard>
            <CategorySearch onAddPress={handleSearch}></CategorySearch>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map((item) => (
                    <CategorySuggestionChip
                        key={item.id}
                        id={item.id}
                        label={item.label}
                        selected={selectedCategory === item.id}
                        onPress={handleSelectCategory}
                    />
                ))}
            </ScrollView>
        </Screen>
    )
}