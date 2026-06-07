import React from "react";

import {
  useForm,
} from "react-hook-form";

import Screen from "@/components/Screen/Screen";
import AppHeader from "@/components/AppHeader";

import ProfilePhotoSection from "../sections/Profile/ProfilePhotoSection";

import {
  zodResolver,
} from "@hookform/resolvers/zod";

import {
  stylesEditProfile,
} from "../styles/edit-profile.styles";
import { EditProfileFormData } from "../types/edit-profile.types";
import { editProfileSchema } from "../schema/edit-profileSchema";
import { Button } from "@/components";
import PersonalInfoForm from "../sections/Profile/PersonalInfoForm";

export default function EditProfileScreen() {

  const {
    control,
    handleSubmit,
  } = useForm<EditProfileFormData>({
    resolver:
      zodResolver(editProfileSchema),

    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(
    data: EditProfileFormData,
  ) {
    console.log(data);
  }

  return (
    <Screen scrollable>
      <AppHeader
        title="Editar Perfil"
        showBackButton
      />

      <ProfilePhotoSection />

      <PersonalInfoForm
        control={control}
      />

      <Button
        title="Salvar Alterações"
        onPress={handleSubmit(onSubmit)}
        style={
          stylesEditProfile
            .actionsContainer
        }
      />
    </Screen>
  );
}