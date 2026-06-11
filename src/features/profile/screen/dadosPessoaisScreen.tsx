import Screen from "@/components/Screen/Screen";
import ProfileHeader from "../sections/DadosPessoais/ProfileHeader";
import PersonalInfoList from "../sections/DadosPessoais/PersonalInfoList";
import { Button } from "@/components";
import { dadosPessoaisStyle } from "../styles/dadosPessoais.styles";
import { PersonalInfo } from "../sections/DadosPessoais/PersonalInfoList/types";
import { useDadosPessoais } from "../hooks/useDadosPessoais";



export default function DadosPessoaisScreen() {
  const {user, loading} = useDadosPessoais();

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

  return (
    <Screen
      headerTitle="Dados Pessoais"
      showBackButton
      scrollable
    >
      <ProfileHeader
        name={user?.name || ""}
        subtitle="Cliente desde 2021"
        imageUrl="https://i.pravatar.cc/300"
      />

      <PersonalInfoList
        items={personalInfo}
      />

      <Button
        title="Editar Dados"
        onPress={() => {}}
        style={dadosPessoaisStyle.button}
      />
    </Screen>
  );
}