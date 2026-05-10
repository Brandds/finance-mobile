import { useState } from "react";

import { LoginFormData } from "../form/schema/login.schema";
import { login } from "../services/auth.service";

export function useLogin() {
  const [loading, setLoading] = useState(false);

  async function handleLogin(
    data: LoginFormData
  ) {
    try {
      setLoading(true);

      const response = await login(data);

      console.log(response);

    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    handleLogin,
  };
}