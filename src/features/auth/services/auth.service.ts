import { api } from "@/services/api";
import { LoginRequest, LoginResponse } from "./types/types";
import { ApiResponse } from "@/shared/types/apiResponse";

export async function login(data: LoginRequest) : Promise<ApiResponse<LoginResponse>> {
  const response = await api.post<ApiResponse<LoginResponse>>(
    "/auth/login",
    data
  );

  return response.data;
}