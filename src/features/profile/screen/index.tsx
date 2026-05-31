import { ScrollView, View } from "react-native";

import Screen from "@/components/Screen/Screen";
import { styles } from "../styles";
import ProfileHeaderSection from "../sections/ProfileHeaderSection";
import AccountSection from "../sections/AccountSection";
import PreferencesSection from "../sections/PreferencesSection";
import SecuritySection from "../sections/SecuritySection";
import SupportSection from "../sections/SupportSection";
import LogoutSection from "../sections/LogoutSection";
import { useAuthStore } from "@/store/auth/auth.store";
import { titleScreen } from "@/constants/titleScreen";
import { useLogout } from "@/features/auth/hooks/useLogout";
import { useProfile } from "../hooks/useProfile";

export default function ProfileScreen() {

  const user = useAuthStore(state => state.userResponse);
  const { handleLogout } = useProfile();

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

  return (
    <Screen
      scrollable
      headerTitle={titleScreen.profile}
      showBackButton
    >

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <ProfileHeaderSection
          name={user?.name || "Brandon Brown"}
          email={user?.email || "brandon@email.com"}
          initials={"BB"}
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
