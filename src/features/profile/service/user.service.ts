import { UserResponse } from "@/features/auth/types/authType";
import { api } from "@/services/api";
import { ApiResponse } from "@/shared/types/apiResponse";

export async function getProfile() {

  const response =
    await api.get<ApiResponse<UserResponse>>(
      "/users/me",
    );

  return response.data.data;
}