import Screen from "@/components/Screen/Screen";
import ProfileHeader from "../sections/DadosPessoais/ProfileHeader";
import PersonalInfoList from "../sections/DadosPessoais/PersonalInfoList";
import { Button } from "@/components";
import { dadosPessoaisStyle } from "../styles/dadosPessoais.styles";
import { PersonalInfo } from "../sections/DadosPessoais/PersonalInfoList/types";


const personalInfo: PersonalInfo[] = [
  {
    label: "Nome Completo",
    value: "Rodrigo Oliveira",
    icon: "person",
  },
  {
    label: "E-mail",
    value: "rodrigo@email.com",
    icon: "mail",
  },
  {
    label: "Telefone",
    value: "(31) 99999-9999",
    icon: "smartphone",
  },
];

export default function DadosPessoaisScreen() {
 

  return (
    <Screen
      headerTitle="Dados Pessoais"
      showBackButton
      scrollable
    >
      <ProfileHeader
        name="Rodrigo Oliveira"
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