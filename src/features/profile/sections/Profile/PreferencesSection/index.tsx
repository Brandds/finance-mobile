
import { Icon } from "@/components";
import SettingsItem from "@/components/Settings/SettingsItem";
import SettingsSection from "@/components/Settings/SettingsSection";
import { titleScreen } from "@/constants/titleScreen";
import { PreferencesSectionProps } from "./types";

export default function PreferencesSection({
    theme,
    onNotificationsPress,
    onThemePress,
}: PreferencesSectionProps) {
    return (
    <SettingsSection title="Preferências">
        <SettingsItem
            icon={
            <Icon
                name="notifications"
                size={20}
            />
            }
            title={titleScreen.NOTIFICACOES}
            onPress={onNotificationsPress}
        />
        <SettingsItem
            icon={
                <Icon
                    name="light-mode"
                    size={20}
                />
            }
            title="Tema"
            value={theme}
            divider={false}
            onPress={onThemePress}
        />
    </SettingsSection>


    );
}
