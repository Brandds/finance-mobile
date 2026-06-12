import { UserResponse } from "@/features/auth/types/authType";
import {
  useEffect,
  useState,
} from "react";
import { getProfile } from "../service/user.service";
import { useToast } from "@/hooks/useToasts";
import { toastMessages, toastTitles } from "@/constants/toast.constants";


export function useDadosPessoais() {
  const [user, setUser] =
    useState<UserResponse | null>(null);
  
  const { showToast } = useToast();

  const [loading, setLoading] =
    useState(false);

  async function loadUser() {
    try {
      setLoading(true);

      const response = await getProfile();
      showToast({
        title: toastTitles.SUCESSO,
        message: toastMessages.DADOS_CARREGADOS,
        type: "success",
      });

      setUser(response);

    } catch (error: any) {
      showToast({
        title: toastTitles.ERRO,
        message: toastMessages.ERRO_CARREGAR_DADOS,
        type: "error",
      });
      console.log("Status:", error.response?.status);
      console.log("Data:", error.response?.data);
      console.log("Erro completo:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  return {
    user,
    loading,
    reload: loadUser,
  };
}