import Screen from "@/components/Screen/Screen";
import PersonalInfoItem from "../components/DadosPessoais/PersonalInfoItem";


export default function DadosPessoaisScreen() {
    return (
        <Screen>
            <PersonalInfoItem label="Nome" value="John Doe" />
            <PersonalInfoItem label="Email" value="john.doe@example.com" />
            <PersonalInfoItem label="Telefone" value="(123) 456-7890" />
        </Screen>
    )
}