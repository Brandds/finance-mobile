import { FieldConfig } from "@/components/FormFields/types";

export const fieldsRegister: FieldConfig[] = [
  {
    name: "name",
    label: "NOME",
    placeholder: "Seu nome",
    icon: "person",
    library: "material",
  },
  {
    name: "email",
    label: "EMAIL",
    placeholder: "Digite seu email",
    icon: "mail",
    library: "material",
  },
  {
    name: "cpf",
    label: "CPF",
    placeholder: "000.000.000-00",
    icon: "id-card",
    library: "fontAwesome",
  },
  {
    name: "password",
    label: "SENHA",
    placeholder: "Digite sua senha",
    icon: "lock",
    library: "material",
    secureTextEntry: true,
  }
];


export const fieldsLogin: FieldConfig[] = [
  {
    name: "email",
    label: "EMAIL",
    placeholder: "Digite seu email",
    icon: "mail",
    library: "material",
  },
  {
    name: "password",
    label: "SENHA",
    placeholder: "Digite sua senha",
    icon: "lock",
    library: "material",
    secureTextEntry: true,
  }
];