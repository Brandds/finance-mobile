
import { Icon } from "@/components";
import SettingsItem from "@/components/Settings/SettingsItem";
import SettingsSection from "@/components/Settings/SettingsSection";
import { SupportSectionProps } from "./types";

export default function SupportSection({
    onHelpPress,
    onTermsPress,
}: SupportSectionProps) {
    return (
    <SettingsSection title="Suporte">
        <SettingsItem
            icon={
                <Icon
                    name="help-outline"
                    size={20}
                />
            }
            title="Central de Ajuda"
            onPress={onHelpPress}
        />

        <SettingsItem
            icon={
                <Icon
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
