import { UserResponse } from "@/features/auth/types/authType";
import {
  useEffect,
  useState,
} from "react";
import { getProfile } from "../service/user.service";
import { useToast } from "@/hooks/useToasts";


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
        title: "Sucesso",
        message: `Dados do usuário ${response.name} carregados com sucesso`,
        type: "success",
      });

      setUser(response);

    } catch (error: any) {
      showToast({
        title: "Erro",
        message: "Erro ao carregar dados do usuário",
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