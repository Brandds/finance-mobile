import { ScrollView, View } from "react-native";

import Screen from "@/components/Screen/Screen";
import AppHeader from "@/components/AppHeader";
import { styles } from "../styles";
import ProfileHeaderSection from "../sections/ProfileHeaderSection";
import AccountSection from "../sections/AccountSection";
import PreferencesSection from "../sections/PreferencesSection";
import SecuritySection from "../sections/SecuritySection";
import SupportSection from "../sections/SupportSection";
import LogoutSection from "../sections/LogoutSection";

export default function ProfileScreen() {
  const handleEditAvatar = () => {
    console.log("Editar avatar");
  };

  const handleEditProfile = () => {
    console.log("Editar perfil");
  };

  const handlePersonalData = () => {
    console.log("Dados pessoais");
  };

  const handlePremium = () => {
    console.log("Premium");
  };

  const handleNotifications = () => {
    console.log("Notificações");
  };

  const handleLanguage = () => {
    console.log("Idioma");
  };

  const handleTheme = () => {
    console.log("Tema");
  };

  const handleChangePassword = () => {
    console.log("Alterar senha");
  };

  const handleBiometricChange = (
    value: boolean
  ) => {
    console.log("Biometria:", value);
  };

  const handleHelp = () => {
    console.log("Ajuda");
  };

  const handleTerms = () => {
    console.log("Termos");
  };

  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <Screen>
      <AppHeader title="Perfil" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <ProfileHeaderSection
          name="Brandon"
          email="brandon@email.com"
          initials="BB"
          onEditAvatar={handleEditAvatar}
          onEditProfile={handleEditProfile}
        />

        <View style={styles.sectionsContainer}>
          <AccountSection
            onPersonalDataPress={
              handlePersonalData
            }
            onPremiumPress={handlePremium}
          />

          <PreferencesSection
            language="Português"
            theme="Claro"
            onNotificationsPress={
              handleNotifications
            }
            onLanguagePress={handleLanguage}
            onThemePress={handleTheme}
          />

          <SecuritySection
            biometricEnabled={true}
            onChangePasswordPress={
              handleChangePassword
            }
            onBiometricChange={
              handleBiometricChange
            }
          />

          <SupportSection
            onHelpPress={handleHelp}
            onTermsPress={handleTerms}
          />

          <LogoutSection
            onLogoutPress={handleLogout}
          />
        </View>
      </ScrollView>
    </Screen>

  );
}
