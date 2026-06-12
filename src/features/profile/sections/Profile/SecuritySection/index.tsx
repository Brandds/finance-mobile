
import { Icon } from "@/components";
import SettingsItem from "@/components/Settings/SettingsItem";
import SettingsSection from "@/components/Settings/SettingsSection";
import SettingsToggle from "@/components/Settings/SettingsToggle";
import { SecuritySectionProps } from "./types";

export default function SecuritySection({
    biometricEnabled,
    onChangePasswordPress,
    onBiometricChange,
}: SecuritySectionProps) {
    return (
    <SettingsSection title="Segurança">
        <SettingsItem
            icon={
            <Icon
                name="lock"
                size={20}
            />
            }
            title="Alterar senha"
            onPress={onChangePasswordPress}
        />

        <SettingsToggle
            icon={
                <Icon
                    name="fingerprint"
                    size={20}
                />
            }
            title="Biometria"
            value={biometricEnabled}
            onValueChange={onBiometricChange}
            divider={false}
        />
    </SettingsSection>

    );
}
