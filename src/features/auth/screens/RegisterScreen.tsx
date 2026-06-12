import { Pressable, View } from "react-native";

import { Icon } from "@/components";
import Screen from "@/components/Screen/Screen";
import Typography from "@/components/Typography/Typography";


import { constants } from "@/constants/constants";

import { stylesLogin } from "../styles";

import { ROUTES } from "@/navigation/routes";
import { useTheme } from "@/theme/ThemeProvider";
import { useNavigation } from "@react-navigation/native";
import RegisterForm from "../form/RegisterForm";
import { NavigationProps } from "../form/types";

export default function RegisterScreen() {

  const navigation = useNavigation<NavigationProps>();
  const theme = useTheme();
  const stylesLOGIN = stylesLogin(theme);
  return (
    <Screen
      scrollable
    >
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
              Comece sua jornada financeira.
            </Typography>
          </View>
        </View>

        <RegisterForm />

        {/* Footer */}
        <View style={stylesLOGIN.footer}>
          <Typography
            variant="body2"
            color={theme.colors.textSecondary}
          >
            Já possui uma conta?
          </Typography>

          <Pressable
            onPress={() => navigation.navigate(ROUTES.LOGIN)}
          >
            <Typography
              variant="body2"
              color={theme.colors.primary}
            >
              Faça login
            </Typography>
          </Pressable>
        </View>
      </View>
    </Screen>
  );
}