import { View } from "react-native";


import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import Typography from "@/components/Typography/Typography";

import { Button, Card } from "@/components";


import {
  LoginFormData,
  loginSchema,
} from "./schema/login.schema";

import FormFields from "@/components/FormFields/FormFields";
import { useTheme } from "@/theme/ThemeProvider";
import { useLogin } from "../hooks/useLogin";
import { stylesLogin } from "../styles";
import { fieldsLogin } from "./fields/fields";



export default function LoginForm() {
  const {
    control,
    handleSubmit,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { loading, handleLogin } =  useLogin();
  const theme = useTheme();
  const styles = stylesLogin(theme);

  async function onSubmit(data: LoginFormData) {
    await handleLogin(data);
  }


  return (
    <Card style={styles.card}>
      {/* Header */}
      <View style={styles.cardHeader}>
        <Typography variant="h1">
          Boas-vindas
        </Typography>

        <Typography
          variant="body2"
          color={theme.colors.textSecondary}
        >
          Acesse sua conta para continuar.
        </Typography>
      </View>

      {/* Fields */}
      <View style={styles.field}>
        <FormFields 
          fields={fieldsLogin} 
          control={control}
        />         
      </View>

      {/* Submit */}
      <Button
        title="Entrar"
        onPress={handleSubmit(onSubmit)}
        loading={loading}
      />

    </Card>
  );
}