import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Card } from "@/components";
import Screen from "@/components/Screen/Screen";
import Typography from "@/components/Typography/Typography";
import { ROUTES } from "@/navigation/routes";
import { RootStackParamList } from "@/navigation/types";
import { useTheme } from "@/theme/ThemeProvider";
import { stylesLogin } from "../styles";

type Props = NativeStackScreenProps<RootStackParamList, "VerifyEmail">;

export default function VerifyEmailScreen({ route, navigation }: Props) {
  const theme = useTheme();
  const styles = stylesLogin(theme);

  return (
    <Screen scrollable centered>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Typography variant="h1">Verifique seu e-mail</Typography>
          <Typography variant="body2">
            Enviamos as instruções de confirmação para {route.params.email}.
            Abra o link recebido para ativar sua conta antes de entrar.
          </Typography>
          <Typography variant="body2" color={theme.colors.textSecondary}>
            Se não encontrar a mensagem, confira também a pasta de spam ou lixo eletrônico.
          </Typography>
          <Button
            title="Voltar para entrar"
            onPress={() => navigation.popTo(ROUTES.LOGIN)}
          />
        </Card>
      </View>
    </Screen>
  );
}
