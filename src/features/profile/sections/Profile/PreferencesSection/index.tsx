
import { Icon } from "@/components";
import SettingsItem from "@/components/Settings/SettingsItem";
import SettingsSection from "@/components/Settings/SettingsSection";
import { titleScreen } from "@/constants/titleScreen";
import { PreferencesSectionProps } from "./types";

export default function PreferencesSection({
    language,
    theme,
    onNotificationsPress,
    onLanguagePress,
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
            title={titleScreen.notifications}
            onPress={onNotificationsPress}
        />
        <SettingsItem
            icon={
                <Icon
                    name="language"
                    size={20}
                />
            }
            title="Idioma"
            value={language}
            onPress={onLanguagePress}
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
