import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { SupportSectionProps } from "./types";
import SettingsSection from "@/components/Settings/SettingsSection";
import SettingsItem from "@/components/Settings/SettingsItem";

export default function SupportSection({
    onHelpPress,
    onTermsPress,
}: SupportSectionProps) {
    return (
    <SettingsSection title="Suporte">
        <SettingsItem
            icon={
                <MaterialIcons
                    name="help-outline"
                    size={20}
                />
            }
            title="Central de Ajuda"
            onPress={onHelpPress}
        />

        <SettingsItem
            icon={
                <MaterialIcons
                    name="description"
                    size={20}
                />
            }
            title="Termos de Uso e Privacidade"
            onPress={onTermsPress}
            divider={false}
        />
    </SettingsSection>

    );
}
