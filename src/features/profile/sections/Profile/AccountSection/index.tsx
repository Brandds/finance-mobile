
import { Icon } from "@/components";
import SettingsItem from "@/components/Settings/SettingsItem";
import SettingsSection from "@/components/Settings/SettingsSection";
import { AccountSectionProps } from "./types";

export default function AccountSection({
    onPersonalDataPress,
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
            divider={false}
        />
    </SettingsSection>


    );
}
