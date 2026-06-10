import { UserResponse } from "@/features/auth/types/authType";
import { api } from "@/services/api";
import { ApiResponse } from "@/shared/types/apiResponse";
import { CreateUserRequest } from "../types/user.Type";

export async function getProfile() {

  const response =
    await api.get<ApiResponse<UserResponse>>(
      "/users/me",
    );

  return response.data.data;
}

export async function createUser(newUser: CreateUserRequest) {
  return await api.post<ApiResponse<void>>(
    "/users/register",
    newUser
  );
}