import { useState } from "react";

import { useAuthStore }
from "@/store/auth/auth.store";

export function useLogout() {

  const [loading, setLoading] =
    useState(false);

  const signOut =
    useAuthStore(
      (state) => state.signOut
    );

  async function handleLogout() {

    try {
      setLoading(true);

      await signOut();

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  }

  return {
    loading,
    handleLogout,
  };
}