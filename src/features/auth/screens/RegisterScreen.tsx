import { View, Pressable } from "react-native";

import Screen from "@/components/Screen/Screen";
import Typography from "@/components/Typography/Typography";
import { Icon } from "@/components";

import { tokens } from "@/theme/tokens";

import { constants } from "@/constants/constants";

import { stylesLogin } from "../styles";

import RegisterForm from "../form/RegisterForm";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../form/types";
import { ROUTES } from "@/navigation/routes";

export default function RegisterScreen() {

  const navigation = useNavigation<NavigationProps>();

  return (
    <Screen
      scrollable
    >
      <View style={stylesLogin.container}>
        {/* Header */}
        <View style={stylesLogin.header}>
          <Icon
            styleView={stylesLogin.logoContainer}
            name="account-balance-wallet"
            size={28}
            color={tokens.colors.onPrimary}
          />

          <Typography
            variant="h1"
            color={tokens.colors.primary}
            align="center"
          >
            {constants.titleApp}
          </Typography>

          <View style={stylesLogin.headerDescription}>
            <Typography
              variant="body2"
              color={tokens.colors.textSecondary}
              align="center"
            >
              Comece sua jornada financeira.
            </Typography>
          </View>
        </View>

        <RegisterForm />

        {/* Footer */}
        <View style={stylesLogin.footer}>
          <Typography
            variant="body2"
            color={tokens.colors.textSecondary}
          >
            Já possui uma conta?
          </Typography>

          <Pressable
            onPress={() => navigation.navigate(ROUTES.LOGIN)}
          >
            <Typography
              variant="body2"
              color={tokens.colors.primary}
            >
              Faça login
            </Typography>
          </Pressable>
        </View>
      </View>
    </Screen>
  );
}