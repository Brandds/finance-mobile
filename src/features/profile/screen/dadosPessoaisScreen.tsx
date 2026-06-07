import Screen from "@/components/Screen/Screen";
import PersonalInfoItem from "../components/DadosPessoais/PersonalInfoItem";
import PersonalInfoSection from "../sections/DadosPessoais/PersonalInfoSection";


export default function DadosPessoaisScreen() {
    return (
        <Screen>
            <PersonalInfoSection title="Dados Básicos">
  <PersonalInfoItem
    label="Nome"
    value="Brandon Silva"
  />

  <PersonalInfoItem
    label="Email"
    value="brandon@email.com"
  />

  <PersonalInfoItem
    label="Telefone"
    value="(31) 99999-9999"
  />
</PersonalInfoSection>
        </Screen>
    )
}