import Screen from "@/components/Screen/Screen";
import { Alert, Text } from "react-native";
import { CategoryCard } from "../components/CategoryCard";
import { CategorySearch } from "../components/CategorySearch";

export default function CategoryScreen () {

    const handleSearch = ()  => {
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
        </Screen>
    )
}