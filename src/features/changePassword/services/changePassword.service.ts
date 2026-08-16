import { api } from "@/services/api";
import { ChangePasswordFormData } from "../types/changePassword.types";

export function changePassword(data: ChangePasswordFormData) {
    return api.post("/auth/change-password", data);
}