import { View, Pressable } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, Controller } from "react-hook-form";

import Typography from "@/components/Typography/Typography";
import Input from "@/components/Input";

import { Button, Card } from "@/components";

import { tokens } from "@/theme/tokens";

import {
  RegisterFormData,
  registerSchema,
} from "./schema/register.schema";

import { stylesLogin, stylesRegister } from "../styles";
import FormFields from "@/components/FormFields/FormFields";
import { fields } from "@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js";
import { fieldsRegister } from "./fields/fields";

export default function RegisterForm() {
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
    },
  });

  async function onSubmit(
    data: RegisterFormData
  ) {
    console.log(data);
  }

  return (
    <Card styleCard={stylesLogin.card}>
      {/* Header */}
      <View style={stylesLogin.cardHeader}>
        <Typography variant="h1">
          Criar Conta
        </Typography>

        <Typography
          variant="body2"
          color={tokens.colors.textSecondary}
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
            style={stylesRegister.checkboxContainer}
            onPress={() => field.onChange(!field.value)}
          >
            <MaterialIcons
              name={
                field.value
                  ? "check-box"
                  : "check-box-outline-blank"
              }
              size={22}
              color={tokens.colors.primary}
            />

            <Typography
              variant="body2"
              color={tokens.colors.textSecondary}
            >
              Aceito os termos de uso
            </Typography>
          </Pressable>
        )}
      />
      {errors.acceptTerms && (
        <Typography
          variant="body2"
          color={tokens.colors.error}
        >
          {errors.acceptTerms.message}
        </Typography>
      )}

      {/* Submit */}
      <Button
        title="Criar Conta"
        onPress={handleSubmit(onSubmit)}
      />

      {/* Divider */}
      <View style={stylesLogin.dividerContainer}>
        <View style={stylesLogin.divider} />

        <Typography
          variant="body2"
          color={tokens.colors.textSecondary}
        >
          OU
        </Typography>

        <View style={stylesLogin.divider} />
      </View>

      {/* Social */}
      <Button
        variant="secondary"
        style={stylesLogin.socialButton}
      >
        <MaterialIcons
          name="g-mobiledata"
          size={24}
          color={tokens.colors.text}
        />

        <Typography variant="body2">
          Continuar com Google
        </Typography>
      </Button>
    </Card>
  );
}