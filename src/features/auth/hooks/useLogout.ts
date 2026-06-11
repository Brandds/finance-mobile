import { useState } from "react";

import { useAuthStore }
from "@/store/auth/auth.store";
import { useToast } from "@/hooks/useToasts";

export function useLogout() {

  const [loading, setLoading] =
    useState(false);

  const { showToast } = useToast();

  const signOut =
    useAuthStore(
      (state) => state.signOut
    );

  async function handleLogout() {

    try {
      setLoading(true);

      await signOut();
      showToast({
        title: "Sucesso",
        message: "Logout realizado com sucesso",
        type: "success",
      });

    } catch (error) {

      showToast({
        title: "Erro",
        message: "Erro ao realizar logout",
        type: "error",
      });
    } finally {

      setLoading(false);
    }
  }

  return {
    loading,
    handleLogout,
  };
}