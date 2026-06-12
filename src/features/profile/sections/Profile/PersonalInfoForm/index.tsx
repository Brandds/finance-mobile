import { Control } from "react-hook-form";

import { View } from "react-native";

import FormFields from "@/components/FormFields/FormFields";
import { fieldsEditProfile } from "@/features/profile/fields/edit.profile.fields";
import { EditProfileFormData } from "@/features/profile/schema/edit-profileSchema";
import { stylesEditProfile } from "@/features/profile/styles/edit-profile.styles";
import { useTheme } from "@/theme/ThemeProvider";



interface PersonalInfoFormProps {
  control: Control<EditProfileFormData>;
}

export default function PersonalInfoForm({
  control,
}: PersonalInfoFormProps) {

  const theme = useTheme();
  const styles = stylesEditProfile(theme);
  return (
    <View style={styles.formContainer}>
      <FormFields 
        fields={fieldsEditProfile} 
        control={control}
      />
    </View>
  );
}