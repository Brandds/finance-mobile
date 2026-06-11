export interface EditProfileFormData extends UserEditResponse {}

export interface PersonalInfoFormProps {
  form: EditProfileFormData;

  onChangeField: (
    field: keyof EditProfileFormData,
    value: string
  ) => void;
}

export interface UserEditResponse {
  name: string;
  email: string;
}