import { LoginRequest } from "@/features/auth/services/types/types";
import { api } from "@/services/api";

export async function login(data : LoginRequest) {
  const response = await api.post(
    "/auth/login",
    data
  );
  console.log("response", response)
  return response.data;
}