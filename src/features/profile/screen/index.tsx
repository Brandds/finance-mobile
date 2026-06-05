import { ScrollView, View } from "react-native";

import Screen from "@/components/Screen/Screen";
import { titleScreen } from "@/constants/titleScreen";
import { useAuthStore } from "@/store/auth/auth.store";
import { useProfile } from "../hooks/useProfile";
import AccountSection from "../sections/AccountSection";
import LogoutSection from "../sections/LogoutSection";
import PreferencesSection from "../sections/PreferencesSection";
import ProfileHeaderSection from "../sections/ProfileHeaderSection";
import SecuritySection from "../sections/SecuritySection";
import SupportSection from "../sections/SupportSection";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/styles";
import { NavigationProps } from "@/features/auth/form/types";
import { ROUTES } from "@/navigation/routes";

export default function ProfileScreen() {

  const user = useAuthStore(state => state.userResponse);
  const navigation = useNavigation<NavigationProps>();
  
  const { handleLogout } = useProfile();

  const handleEditAvatar = () => {
    console.log("Editar avatar");
  };

  const handleEditProfile = () => {

    console.log("Editar perfil");
    navigation.navigate(ROUTES.EDIT_PROFILE);
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
