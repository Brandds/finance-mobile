import { UserResponse } from "@/features/auth/types/authType";
import {
  useEffect,
  useState,
} from "react";
import { getProfile } from "../service/user.service";


export function useDadosPessoais() {
  const [user, setUser] =
    useState<UserResponse | null>(null);

  const [loading, setLoading] =
    useState(false);

  async function loadUser() {
    try {
      setLoading(true);

      const response = await getProfile();


      setUser(response);

    } catch (error: any) {
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