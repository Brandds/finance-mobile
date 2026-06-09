import { URL_BASE } from "@/constants/url_base_constants";
import { useAuthStore } from "@/store/auth/auth.store";
import axios from "axios";
import { errorCodes } from "./types";

export const api = axios.create({
  baseURL: URL_BASE,
  
  headers: {
    "Content-Type": "application/json",
  },

  timeout: 10000,
});

api.interceptors.request.use(
  async (config) => {

    const token =
      useAuthStore.getState().token;

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,

  async (error) => {

    const status =
      error.response?.status;

    const errorCode =
      error.response?.data?.errorCode;
      

    const isAuthenticationError =
      status === 401 &&
      [
        "TOKEN_EXPIRED",
        "INVALID_TOKEN",
        "UNAUTHORIZED"
      ].includes(errorCode);

    if (isAuthenticationError) {

      await useAuthStore
        .getState()
        .signOut();
    }

    return Promise.reject(error);
  }
);