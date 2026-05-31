import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { SecuritySectionProps } from "./types";
import SettingsSection from "@/components/Settings/SettingsSection";
import SettingsItem from "@/components/Settings/SettingsItem";
import SettingsToggle from "@/components/Settings/SettingsToggle";

export default function SecuritySection({
    biometricEnabled,
    onChangePasswordPress,
    onBiometricChange,
}: SecuritySectionProps) {
    return (
    <SettingsSection title="Segurança">
        <SettingsItem
            icon={
            <MaterialIcons
                name="lock"
                size={20}
            />
            }
            title="Alterar senha"
            onPress={onChangePasswordPress}
        />

        <SettingsToggle
            icon={
                <MaterialIcons
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
