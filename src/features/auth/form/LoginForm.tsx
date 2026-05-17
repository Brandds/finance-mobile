import { Pressable, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import Typography from "@/components/Typography/Typography";
import Input from "@/components/Input";

import { Button, Card } from "@/components";

import { tokens } from "@/theme/tokens";
import { useNavigation } from "@react-navigation/native";

import {
  LoginFormData,
  loginSchema,
} from "./schema/login.schema";

import { stylesLogin } from "../styles";
import { useLogin } from "../hooks/useLogin";
import { NavigationProps } from "./types";
import { useAuthStore } from "@/store/auth/auth.store";



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

  async function onSubmit(data: LoginFormData) {
    await handleLogin(data);
  }

  return (
    <Card styleCard={stylesLogin.card}>
      {/* Header */}
      <View style={stylesLogin.cardHeader}>
        <Typography variant="h1">
          Boas-vindas
        </Typography>

        <Typography
          variant="body2"
          color={tokens.colors.textSecondary}
        >
          Acesse sua conta para continuar.
        </Typography>
      </View>

      {/* Fields */}
      <View style={stylesLogin.field}>
        <Input
          control={control}
          name="email"
          label="E-MAIL"
          placeholder="nome@exemplo.com"
          icon="mail"
        />

        <Input
          control={control}
          name="password"
          label="SENHA"
          placeholder="••••••••"
          icon="lock"
          secureTextEntry
        />
      </View>

      {/* Forgot password */}
      <Pressable>
        <Typography
          variant="body2"
          color={tokens.colors.primary}
        >
          Esqueceu a senha?
        </Typography>
      </Pressable>

      {/* Submit */}
      <Button
        title="Entrar"
        onPress={handleSubmit(onSubmit)}
        loading={loading}
      />

      {/* Divider */}
      <View style={stylesLogin.dividerContainer}>
        <View style={stylesLogin.divider} />

        <Typography
          variant="body2"
          color={tokens.colors.textSecondary}
        >
          OU ACESSE COM
        </Typography>

        <View style={stylesLogin.divider} />
      </View>

      {/* Social buttons */}
      <View style={stylesLogin.socialButtons}>
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
            Google
          </Typography>
        </Button>

        <Button
          variant="secondary"
          style={stylesLogin.socialButton}
        >
          <MaterialIcons
            name="apple"
            size={24}
            color={tokens.colors.text}
          />

          <Typography variant="body2">
            Apple
          </Typography>
        </Button>
      </View>
    </Card>
  );
}