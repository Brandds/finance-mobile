import { useRef, useState } from "react";
import { EditProfileFormData } from "../types/edit-profile.types";
import { getProfile, updateUser } from "../service/user.service";
import { useToast } from "@/hooks/useToasts";
import { ApiResponse } from "@/shared/types/apiResponse";
import { UserResponse } from "@/features/auth/types/authType";
import { useAuthStore } from "@/store/auth/auth.store";
import { toastMessages, toastTitles } from "@/constants/toast.constants";

export function useEditProfile() {
  const [loadingEditProfile, setLoadingEditProfile] = useState(false);
  const submitting = useRef(false);
  const {showToast} = useToast();
  const updateUserStore =
    useAuthStore(
      (state) => state.updateUser
    );

  async function handleEditProfile(
    data: EditProfileFormData,
  ): Promise<ApiResponse<UserResponse> | undefined>{
    const { token, userResponse } = useAuthStore.getState();
    if (submitting.current || !token || !userResponse) return;

    submitting.current = true;
    try {
      setLoadingEditProfile(true);
      
      const response = await updateUser(data);
      if (useAuthStore.getState().token !== token) return;
      const profile = await getProfile().catch(() => ({
        ...response.data,
        displayPicture: response.data.displayPicture ?? userResponse.displayPicture,
      }));
      await updateUserStore(profile);
      if (useAuthStore.getState().token !== token) return;


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
      submitting.current = false;
      setLoadingEditProfile(false);
    }
  }

  return {
    loadingEditProfile,
    handleEditProfile,
  };
}
