import { Control } from "react-hook-form";

import { View } from "react-native";

import Input from "@/components/Input";
import { EditProfileFormData } from "@/features/profile/schema/edit-profileSchema";
import { stylesEditProfile } from "@/features/profile/styles/edit-profile.styles";



interface PersonalInfoFormProps {
  control: Control<EditProfileFormData>;
}

export default function PersonalInfoForm({
  control,
}: PersonalInfoFormProps) {
  return (
    <View style={stylesEditProfile.formContainer}>
      <Input
        control={control}
        name="fullName"
        label="NOME COMPLETO"
        placeholder="Seu nome completo"
        icon="person"
      />

      <Input
        control={control}
        name="email"
        label="E-MAIL"
        placeholder="nome@email.com"
        icon="mail"
      />

      <Input
        control={control}
        name="phone"
        label="TELEFONE"
        placeholder="(00) 00000-0000"
        icon="phone"
      />
    </View>
  );
}