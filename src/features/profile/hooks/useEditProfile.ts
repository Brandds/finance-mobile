import { EditProfileFormData } from "../types/edit-profile.types";

export function useEditProfile() {

  async function handleSaveProfile(
    data: EditProfileFormData,
  ) {
    console.log(data);
  }

  return {
    handleSaveProfile,
  };
}