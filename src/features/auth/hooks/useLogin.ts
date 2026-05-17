import { useState } from "react";
import axios from "axios";

import { LoginFormData }
from "../form/schema/login.schema";

import { login }
from "../services/auth.service";

import { useAuthStore }
from "@/store/auth/auth.store";

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

      console.log(response);

      await signIn({
        token: response.data.token,

        user: {
          id: 1,
          name: "Brandon",
          email: data.email,
        },
      });

    } catch (error) {

      if (axios.isAxiosError(error)) {

        console.log("AXIOS ERROR");

        console.log(
          error.response?.data
        );

        console.log(error.message);

      } else {

        console.log("UNKNOWN ERROR");

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