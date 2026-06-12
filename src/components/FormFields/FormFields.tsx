import { View } from "react-native";

import Input from "@/components/Input";

import { stylesLogin } from "@/features/auth/styles";

import { FieldConfig } from "./types";
import { useTheme } from "@/theme/ThemeProvider";

interface Props {
  control: any;

  fields: FieldConfig[];
}

export default function FormFields({
  control,
  fields,
}: Props) {
  const theme = useTheme();
  const styles = stylesLogin(theme);
  return (
    <View style={styles.field}>
      {fields.map((field) => (
        <Input
          key={field.name}
          control={control}
          name={field.name}
          label={field.label}
          placeholder={field.placeholder}
          icon={field.icon}
          secureTextEntry={
            field.secureTextEntry
          }
          library={field.library}
        />
      ))}
    </View>
  );
}