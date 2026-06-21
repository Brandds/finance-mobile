import Screen from "@/components/Screen/Screen";
import { Alert, ScrollView, Text } from "react-native";
import { CategoryCard } from "../components/CategoryCard";
import { CategorySearch } from "../components/CategorySearch";
import CategorySuggestionChip from "../components/CategorySuggestionChip";
import { useState } from "react";
import CategorySuggestionList from "../components/CategorySuggestionList";
import CategoryFab from "../components/CategoryFab";
import { Icon } from "@/components";

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

    function handleAddCategory() {
        console.log("Abrir modal de nova categoria");
    }

    return (
        <Screen scrollable>
            <Text>Teste</Text>
            <CategoryCard
                title="Teste"
                transactions={2}
                icon="celebration"
                iconColor="black"
                iconBackgroundColor="white"
            ></CategoryCard>
            <CategorySearch onAddPress={handleSearch}></CategorySearch>
            {/* <CategorySuggestionList
                data={categories}
                selectedId={selectedCategory}
                onSelect={handleSelectCategory}
            ></CategorySuggestionList> */}

            <CategoryFab
                icon={
                <Icon
                    library="material"
                    name="add"
                    size={28}
                    color="#fff"
                />
                }
                onPress={handleAddCategory}
            />
        </Screen>
    )
}