import { View, Pressable } from "react-native";

import Screen from "@/components/Screen/Screen";
import Typography from "@/components/Typography/Typography";
import { Icon } from "@/components";

import { tokens } from "@/theme/tokens";

import { constants } from "@/constants/constants";

import { constantsAuth } from "../constants/constantsAuth";
import { stylesLogin } from "../styles";
import LoginForm from "../form/LoginForm";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../form/types";
import { ROUTES } from "@/navigation/routes";


export default function LoginScreen() {

  const navigation = useNavigation<NavigationProps>();

  return (
    <Screen centered>
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
              {constantsAuth.title}
            </Typography>
          </View>
        </View>

        {/* Form */}
        <LoginForm />

        {/* Footer */}
        <View style={stylesLogin.footer}>
          <Typography
            variant="body2"
            color={tokens.colors.textSecondary}
          >
            Não tem uma conta?
          </Typography>

          <Pressable
            onPress={() => navigation.navigate(ROUTES.REGISTER)}
          >
            <Typography
              variant="body2"
              color={tokens.colors.primary}
            >
              Cadastre-se
            </Typography>
          </Pressable>
        </View>
      </View>
    </Screen>
  );
}