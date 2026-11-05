import { api } from "@/services/api";
import { ApiResponse } from "@/shared/types/apiResponse";
import { ChangePasswordFormData } from "../types/changePassword.types";

export async function changePassword(data: ChangePasswordFormData): Promise<ApiResponse<null>> {
    const { currentPassword, newPassword, confirmPassword } = data;
    const response = await api.post<ApiResponse<null>>("/auth/change-password", {
        currentPassword,
        newPassword,
        confirmPassword,
    });
    return response.data;
}
