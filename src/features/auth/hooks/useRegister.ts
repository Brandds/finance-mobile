import { createUser } from "@/features/profile/service/user.service";
import { CreateUserRequest } from "@/features/profile/types/user.Type";
import { useState } from "react";
import { Alert } from "react-native";
import { NavigationProps } from "../form/types";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "@/navigation/routes";

export function useRegister() {
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation<NavigationProps>();

    async function handleRegister(data: CreateUserRequest) {
        try {
            setLoading(true);
            const response = await createUser(data);

            if (response.status === 201) {
                Alert.alert("Success", "Registrado com sucesso! Por favor valide seu email.");
                navigation.navigate(ROUTES.LOGIN);
            }
        } catch (error) {
            console.error("Registration failed:", error);
            Alert.alert("Error", "Falha no registro. Por favor, tente novamente.");
        } finally {
            setLoading(false);
        }
    }

    return {
        loading,
        handleRegister,
    };
}