import { useState } from "react";

import { useAuthStore }
from "@/store/auth/auth.store";
import { useToast } from "@/hooks/useToasts";
import { toastMessages, toastTitles } from "@/constants/toast.constants";

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
        title: toastTitles.SUCESSO,
        message: toastMessages.LOGOUT_REALIZADO,
        type: "success",
      });

    } catch (error) {

      showToast({
        title: toastTitles.ERRO,
        message: toastMessages.ERRO_LOGOUT,
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