import { createUser } from "@/features/profile/service/user.service";
import { CreateUserRequest } from "@/features/profile/types/user.Type";
import { useState } from "react";
import { Alert } from "react-native";
import { NavigationProps } from "../form/types";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "@/navigation/routes";
import { getApiErrorMessage } from "@/shared/utils/error.util";

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
            const message =
                getApiErrorMessage(error);

            Alert.alert(
                "Cadastro",
                message
            );
        } finally {
            setLoading(false);
        }
    }

    return {
        loading,
        handleRegister,
    };
}