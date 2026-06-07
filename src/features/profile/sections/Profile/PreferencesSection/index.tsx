import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { PreferencesSectionProps } from "./types";
import SettingsSection from "@/components/Settings/SettingsSection";
import SettingsItem from "@/components/Settings/SettingsItem";
import { titleScreen } from "@/constants/titleScreen";

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
            <MaterialIcons
                name="notifications"
                size={20}
            />
            }
            title={titleScreen.notifications}
            onPress={onNotificationsPress}
        />
        <SettingsItem
            icon={
                <MaterialIcons
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
                <MaterialIcons
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
