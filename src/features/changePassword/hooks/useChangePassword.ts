import { useToast } from "@/hooks/useToasts";
import { useState } from "react";
import { ChangePasswordFormData } from "../types/changePassword.types";
import axios from "axios";
import { changePassword } from "../services/changePassword.service";

function getChangePasswordErrorMessage(
    status?: number
) {

    switch (status) {

        case 400:
            return "Senha atual incorreta";

        case 404:
            return "Usuário não encontrado";

        case 500:
            return "Erro interno do servidor";

        default:
            return "Erro ao alterar senha";
    }
}


export function useChangePassword() {

    const [loading, setLoading] = useState(false);

    const { showToast } = useToast();

    async function handleChangePassword(data: ChangePasswordFormData) {
        try {
            setLoading(true);

            await changePassword(data);

            showToast({
                title: "Sucesso",
                message: "Senha alterada com sucesso",
                type: "success",
            });

        } catch (error) {

            if (axios.isAxiosError(error)) {

                const status = error.response?.status;

                const apiMessage = error.response?.data?.message;

                const message = apiMessage || getChangePasswordErrorMessage(status);

                showToast({
                    title: "Erro",
                    message: message,
                    type: "error",
                });
            }
        } finally {
            setLoading(false);
        }
    }

    return { loading, handleChangePassword };
}