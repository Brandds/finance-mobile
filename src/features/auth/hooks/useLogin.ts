import { useState } from "react";
import { Alert } from "react-native";
import axios from "axios";

import { LoginFormData } from "../form/schema/login.schema";
import { login } from "../services/auth.service";

import { useAuthStore } from "@/store/auth/auth.store";

function getLoginErrorMessage(
  status?: number
) {

  switch (status) {

    case 401:
      return "Senha incorreta";

    case 404:
      return "Usuário não encontrado";

    case 500:
      return "Erro interno do servidor";

    default:
      return "Erro ao realizar login";
  }
}

export function useLogin() {

  const [loading, setLoading] =
    useState(false);

  const signIn =
    useAuthStore(
      (state) => state.signIn
    );

  async function handleLogin(
    data: LoginFormData
  ) {

    try {

      setLoading(true);

      const response =
        await login(data);

      await signIn({
        token: response.data.token,
        user: response.data.user,
      });

      Alert.alert(
        "Sucesso",
        response.message
      );

    } catch (error) {

      if (axios.isAxiosError(error)) {

        const status =
          error.response?.status;

        const apiMessage =
          error.response?.data?.message;

        const message =
          apiMessage ||
          getLoginErrorMessage(status);

        Alert.alert(
          "Erro",
          message
        );

        console.log(
          error.response?.data
        );

      } else {

        Alert.alert(
          "Erro",
          "Erro inesperado"
        );

        console.log(error);
      }

    } finally {

      setLoading(false);
    }
  }

  return {
    loading,
    handleLogin,
  };
}