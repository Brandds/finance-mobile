import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { AccountSectionProps } from "./types";
import SettingsSection from "@/components/Settings/SettingsSection";
import SettingsItem from "@/components/Settings/SettingsItem";
import SettingsBadge from "@/components/Settings/SettingsBadge";

export default function AccountSection({
    onPersonalDataPress,
    onPremiumPress,
}: AccountSectionProps) {
    return (
    <SettingsSection title="Conta">
        <SettingsItem
            icon={<MaterialIcons
                name="person"
                size={20}
            />
            }
            title="Dados pessoais"
            onPress={onPersonalDataPress}
        />

        <SettingsItem
            icon={
                <MaterialIcons
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
