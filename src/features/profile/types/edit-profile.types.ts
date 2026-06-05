export interface EditProfileFormData {
  fullName: string;
  email: string;
  phone: string;
  cpf: string;
}

export interface PersonalInfoFormProps {
  form: EditProfileFormData;

  onChangeField: (
    field: keyof EditProfileFormData,
    value: string
  ) => void;
}