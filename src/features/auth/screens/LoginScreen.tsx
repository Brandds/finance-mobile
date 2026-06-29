import { Pressable, View } from "react-native";

import { Icon } from "@/components";
import Screen from "@/components/Screen/Screen";
import Typography from "@/components/Typography/Typography";


import { constants } from "@/constants/constants";

import { ROUTES } from "@/navigation/routes";
import { useTheme } from "@/theme/ThemeProvider";
import { useNavigation } from "@react-navigation/native";
import { constantsAuth } from "../constants/constantsAuth";
import LoginForm from "../form/LoginForm";
import { NavigationProps } from "../form/types";
import { stylesLogin } from "../styles";


export default function LoginScreen() {

  const navigation = useNavigation<NavigationProps>();
  const theme = useTheme();
  const stylesLOGIN = stylesLogin(theme);

  return (
    <Screen centered>
      <View style={stylesLOGIN.container}>
        {/* Header */}
        <View style={stylesLOGIN.header}>
          <Icon
            name="account-balance-wallet"
            size={28}
            color={theme.colors.onPrimary}
          />

          <Typography
            variant="h1"
            color={theme.colors.primary}
            align="center"
          >
            {constants.titleApp}
          </Typography>

          <View style={stylesLOGIN.headerDescription}>
            <Typography
              variant="body2"
              color={theme.colors.textSecondary}
              align="center"
            >
              {constantsAuth.title}
            </Typography>
          </View>
        </View>

        {/* Form */}
        <LoginForm />

        {/* Footer */}
        <View style={stylesLOGIN.footer}>
          <Typography
            variant="body2"
            color={theme.colors.textSecondary}
          >
            Não tem uma conta?
          </Typography>

          <Pressable
            onPress={() => navigation.navigate(ROUTES.REGISTER)}
          >
            <Typography
              variant="body2"
              color={theme.colors.textLink}
              underline
            >
              Cadastre-se
            </Typography>
          </Pressable>
        </View>
      </View>
    </Screen>
  );
}