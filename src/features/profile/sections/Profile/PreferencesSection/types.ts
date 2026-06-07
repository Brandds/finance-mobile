export type PreferencesSectionProps = {
    language: string;
    theme: string;

    onNotificationsPress: () => void;
    onLanguagePress: () => void;
    onThemePress: () => void;
};
