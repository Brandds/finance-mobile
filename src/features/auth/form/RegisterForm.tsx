import { Pressable, View } from "react-native";


import { zodResolver } from "@hookform/resolvers/zod";

import { Controller, useForm } from "react-hook-form";

import Typography from "@/components/Typography/Typography";

import { Button, Card, Icon } from "@/components";


import {
  RegisterFormData,
  registerSchema,
} from "./schema/register.schema";

import FormFields from "@/components/FormFields/FormFields";
import { useTheme } from "@/theme/ThemeProvider";
import { useRegister } from "../hooks/useRegister";
import { stylesLogin, stylesRegister } from "../styles";
import { fieldsRegister } from "./fields/fields";

export default function RegisterForm() {

  const {loading, handleRegister } = useRegister();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      name: "",
      email: "",
      password: "",
      acceptTerms: false,
      cpf: "",
    },
  });
  const theme = useTheme();
  const stylesLOGIN = stylesLogin(theme);
  const stylesREGISTER = stylesRegister(theme);

  async function onSubmit(
    data: RegisterFormData
  ) {
    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password,
      cpf: data.cpf,
    };
    await handleRegister(newUser);
  }

  return (
    <Card style={stylesLOGIN.card}>
      {/* Header */}
      <View style={stylesLOGIN.cardHeader}>
        <Typography variant="h1">
          Criar Conta
        </Typography>

        <Typography
          variant="body2"
          color={theme.colors.textSecondary}
        >
          Organize sua vida financeira.
        </Typography>
      </View>

      {/* Fields */}
      <FormFields
        control={control}
        fields={fieldsRegister}
      />

      {/* Terms */}
      <Controller
        control={control}
        name="acceptTerms"
        render={({ field }) => (
          <Pressable
            style={stylesREGISTER.checkboxContainer}
            onPress={() => field.onChange(!field.value)}
          >
            <Icon
              name={
                field.value
                  ? "check-box"
                  : "check-box-outline-blank"
              }
              size={22}
              color={theme.colors.primary}
            />

            <Typography
              variant="body2"
              color={theme.colors.textSecondary}
            >
              Aceito os termos de uso
            </Typography>
          </Pressable>
        )}
      />
      {errors.acceptTerms && (
        <Typography
          variant="body2"
          color={theme.colors.error}
        >
          {errors.acceptTerms.message}
        </Typography>
      )}

      {/* Submit */}
      <Button
        title="Criar Conta"
        loading={loading}
        onPress={handleSubmit(onSubmit)}
      />

      {/* Divider */}
      <View style={stylesLOGIN.dividerContainer}>
        <View style={stylesLOGIN.divider} />

        <Typography
          variant="body2"
          color={theme.colors.textSecondary}
        >
          OU
        </Typography>

        <View style={stylesLOGIN.divider} />
      </View>

      {/* Social */}
      <Button
        variant="secondary"
        style={stylesLOGIN.socialButton}
      >
        <Icon
          name="g-mobiledata"
          size={24}
          color={theme.colors.text}
        />

        <Typography variant="body2">
          Continuar com Google
        </Typography>
      </Button>
    </Card>
  );
}