import { useState } from "react";
import { EditProfileFormData } from "../types/edit-profile.types";
import { updateUser } from "../service/user.service";
import { useToast } from "@/hooks/useToasts";
import { ApiResponse } from "@/shared/types/apiResponse";
import { UserResponse } from "@/features/auth/types/authType";
import { useAuthStore } from "@/store/auth/auth.store";
import { toastMessages, toastTitles } from "@/constants/toast.constants";

export function useEditProfile() {
  const [loadingEditProfile, setLoadingEditProfile] = useState(false);
  const {showToast} = useToast();
  const updateUserStore =
    useAuthStore(
      (state) => state.updateUser
    );

  async function handleEditProfile(
    data: EditProfileFormData,
  ): Promise<ApiResponse<UserResponse> | undefined>{
    try {
      setLoadingEditProfile(true);
      
      const response = await updateUser(data);
      updateUserStore(response.data);


      showToast({
        title: toastTitles.PERFIL_ATUALIZADO,
        type: "success",
        message: response.message,
      });
      return response;

    } catch (error) {
      console.error("Error updating profile:", error);
      showToast({
        title: toastTitles.ERRO_ATUALIZAR_PERFIL,
        type: "error",
        message: toastMessages.ERRO_ATUALIZAR_PERFIL
      });
    } finally {
      setLoadingEditProfile(false);
    }
  }

  return {
    loadingEditProfile,
    handleEditProfile,
  };
}