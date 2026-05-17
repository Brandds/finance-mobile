import { URL_BASE } from "@/constants/url_base_constants";
import { useAuthStore } from "@/store/auth/auth.store";
import axios from "axios";

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