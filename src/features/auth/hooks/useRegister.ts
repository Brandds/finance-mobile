import { toastMessages, toastTitles } from "@/constants/toast.constants";
import { createUser } from "@/features/profile/service/user.service";
import { CreateUserRequest } from "@/features/profile/types/user.Type";
import { useToast } from "@/hooks/useToasts";
import { ROUTES } from "@/navigation/routes";
import { getApiErrorMessage } from "@/shared/utils/error.util";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { NavigationProps } from "../form/types";

export function useRegister() {
    const [loading, setLoading] = useState(false);
    const { showToast } = useToast();
    const navigation = useNavigation<NavigationProps>();

    async function handleRegister(data: CreateUserRequest) {
        try {
            setLoading(true);
            const response = await createUser(data);

            if (response.status === 201) {
                showToast({
                    title: toastTitles.SUCESSO,
                    message: toastMessages.REGISTRO_SUCESSO,
                    type: "success",
                });
                navigation.navigate(ROUTES.LOGIN);
            }
        } catch (error) {
            const message =
                getApiErrorMessage(error);

            showToast({
                title: toastTitles.ERRO,
                message: message || toastMessages.REGISTRO_FALHA,
                type: "error",
            });
        } finally {
            setLoading(false);
        }
    }

    return {
        loading,
        handleRegister,
    };
}