import Screen from "@/components/Screen/Screen";
import ProfileHeader from "../sections/DadosPessoais/ProfileHeader";
import PersonalInfoList from "../sections/DadosPessoais/PersonalInfoList";
import { Button } from "@/components";
import { dadosPessoaisStyle } from "../styles/dadosPessoais.styles";
import { PersonalInfo } from "../sections/DadosPessoais/PersonalInfoList/types";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/features/auth/form/types";
import { ROUTES } from "@/navigation/routes";
import { useAuthStore } from "@/store/auth/auth.store";
import { useTheme } from "@/theme/ThemeProvider";
import Typography from "@/components/Typography/Typography";



export default function DadosPessoaisScreen() {
  const user = useAuthStore((state) => state.userResponse);
  const navigation = useNavigation<NavigationProps>();

  const theme = useTheme();
  const style = dadosPessoaisStyle(theme);

  const personalInfo: PersonalInfo[] = [
    {
      label: "Nome Completo",
      value: user?.name || "",
      icon: "person",
    },
    {
      label: "E-mail",
      value: user?.email || "",
      icon: "mail",
    },
    {
      label: "CPF",
      value: user?.cpf || "",
      icon: "assignment-ind",
    },
  ];
  const availableInfo = personalInfo.filter(({ value }) => value.trim());

  return (
    <Screen
      headerTitle="Dados Pessoais"
      showBackButton
      scrollable
    >
      {user && (
        <ProfileHeader
          name={user.name?.trim() ?? ""}
          imageUrl="https://i.pravatar.cc/300"
        />
      )}

      {availableInfo.length > 0 ? (
        <PersonalInfoList items={availableInfo} />
      ) : (
        <Typography variant="body2" color={theme.colors.text}>
          Dados pessoais indisponíveis.
        </Typography>
      )}

      {user && (
        <Button
          title="Editar Dados"
          onPress={() => navigation.navigate(ROUTES.EDIT_PROFILE)}
          style={style.button}
        />
      )}
    </Screen>
  );
}
