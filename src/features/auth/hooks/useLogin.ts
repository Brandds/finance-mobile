import axios from "axios";
import { useState } from "react";

import { LoginFormData } from "../form/schema/login.schema";
import { login } from "../services/auth.service";

import { useToast } from "@/hooks/useToasts";
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

  const { showToast } = useToast();
    

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

      showToast({
        title: "Sucesso",
        message: "Login realizado com sucesso",
        type: "success",
      });

    } catch (error) {

      if (axios.isAxiosError(error)) {

        const status =
          error.response?.status;

        const apiMessage =
          error.response?.data?.message;

        const message =
          apiMessage ||
          getLoginErrorMessage(status);

        showToast({
          title: "Erro",
          message: message,
          type: "error",
        });

        console.log(
          error.response?.data
        );

      } else {

        showToast({
          title: "Erro",
          message: "Erro inesperado",
          type: "error",
        });

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