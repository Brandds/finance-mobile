import Screen from "@/components/Screen/Screen";
import { Text } from "react-native";
import { CategoryCard } from "../components/CategoryCard";

export default function CategoryScreen () {
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
        </Screen>
    )
}