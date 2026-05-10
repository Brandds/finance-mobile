import { api } from "@/services/api";
import { LoginRequest } from "./types/types";

export async function login(data: LoginRequest) {
  const response = await api.post(
    "/auth/login",
    data
  );

  return response.data;
}