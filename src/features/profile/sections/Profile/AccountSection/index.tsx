
import { Icon } from "@/components";
import SettingsBadge from "@/components/Settings/SettingsBadge";
import SettingsItem from "@/components/Settings/SettingsItem";
import SettingsSection from "@/components/Settings/SettingsSection";
import { AccountSectionProps } from "./types";

export default function AccountSection({
    onPersonalDataPress,
    onPremiumPress,
}: AccountSectionProps) {
    return (
    <SettingsSection title="Conta">
        <SettingsItem
            icon={<Icon
                name="person"
                size={20}
            />
            }
            title="Dados pessoais"
            onPress={onPersonalDataPress}
        />

        <SettingsItem
            icon={
                <Icon
                    name="workspace-premium"
                    size={20}
                />
            }
            title="Assinatura Premium"
            onPress={onPremiumPress}
            divider={false}
            rightContent={
                <SettingsBadge
                    label="Ativo"
                    variant="success"
                />
            }
        />
    </SettingsSection>


    );
}
