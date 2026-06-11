import React, { useEffect } from "react";

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
import { useDadosPessoais } from "../hooks/useDadosPessoais";

export default function EditProfileScreen() {
  const {user, loading} = useDadosPessoais();

  const {
    control,
    handleSubmit,
    reset,
  } = useForm<EditProfileFormData>({
    resolver:
      zodResolver(editProfileSchema),

    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
      });
    }
  }, [user, reset]);

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