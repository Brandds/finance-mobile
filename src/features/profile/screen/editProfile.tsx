import React, { useEffect, useState } from "react";

import {
  useForm,
} from "react-hook-form";

import Screen from "@/components/Screen/Screen";
import Header from "@/components/Header";

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
import { useEditProfile } from "../hooks/useEditProfile";
import { NavigationProps } from "@/features/auth/form/types";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@/theme/ThemeProvider";

export default function EditProfileScreen() {
  const {user, loading} = useDadosPessoais();
  const {handleEditProfile, loadingEditProfile} = useEditProfile();
  const navigation = useNavigation<NavigationProps>();
  const theme = useTheme();
  const styles = stylesEditProfile(theme);

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
    data: EditProfileFormData
  ) {
    const response =
      await handleEditProfile(data);

    if (response) {
      navigation.goBack();
    }
  }

  return (
    <Screen scrollable>
      <Header
        title="Editar Perfil"
        showBackButton
      />

      <ProfilePhotoSection />

      <PersonalInfoForm
        control={control}
      />

      <Button
        title="Salvar Alterações"
        loading={loadingEditProfile}
        onPress={handleSubmit(onSubmit)}
        style={
          styles
            .actionsContainer
        }
      />
    </Screen>
  );
}