import { FieldConfig } from "@/components/FormFields/types";

export const fieldsChangePassword: FieldConfig[] = [
    {
        name: "currentPassword",
        label: "Senha Atual",
        placeholder: "Digite sua senha atual",
        icon: "lock",
        library: "material",
        secureTextEntry: true,
    },
    {
        name: "newPassword",
        label: "Nova Senha",
        placeholder: "Digite sua nova senha",
        icon: "key",
        library: "material",
        secureTextEntry: true,
    },
    {
        name: "confirmPassword",
        label: "Confirmar Nova Senha",
        placeholder: "Digite novamente sua nova senha",
        icon: "verified_user",
        library: "material",
        secureTextEntry: true,
    }
]