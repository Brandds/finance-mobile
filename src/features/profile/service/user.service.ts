import { UserResponse } from "@/features/auth/types/authType";
import { api } from "@/services/api";
import { ApiResponse } from "@/shared/types/apiResponse";
import { CreateUserRequest } from "../types/user.Type";
import { UserEditResponse } from "../types/edit-profile.types";

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

export async function updateUser(updatedData: Partial<UserEditResponse>)
  : Promise<ApiResponse<UserResponse>>
{

  const response = await api.put<ApiResponse<UserResponse>>(
    "/users/me",
    updatedData
  );

  return response.data;
}

export type AvatarImage = { uri: string; name: string; type: string };

export async function uploadAvatar(image: AvatarImage) {
  const form = new FormData();
  form.append("image", image as unknown as Blob);
  await api.put<ApiResponse<void>>("/users/me/avatar", form, {
    headers: { "Content-Type": undefined },
  });
}

export async function deleteAvatar() {
  await api.delete<ApiResponse<void>>("/users/me/avatar");
}
