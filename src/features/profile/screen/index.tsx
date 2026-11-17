import { ScrollView, View } from "react-native";

import AppHeader from "@/components/AppHeader";
import Screen from "@/components/Screen/Screen";
import { NavigationProps } from "@/features/auth/form/types";
import { ROUTES } from "@/navigation/routes";
import { useAuthStore } from "@/store/auth/auth.store";
import { useThemeStore } from "@/store/theme/theme.store";
import { useNavigation } from "@react-navigation/native";
import { useProfile } from "../hooks/useProfile";
import AccountSection from "../sections/Profile/AccountSection";
import LogoutSection from "../sections/Profile/LogoutSection";
import PreferencesSection from "../sections/Profile/PreferencesSection";
import ProfileHeaderSection from "../sections/Profile/ProfileHeaderSection";
import SecuritySection from "../sections/Profile/SecuritySection";
import SupportSection from "../sections/Profile/SupportSection";
import { styles } from "../styles/styles";

export default function ProfileScreen() {

  const user = useAuthStore(state => state.userResponse);
  const name = user?.name?.trim() ?? "";
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
  const navigation = useNavigation<NavigationProps>();
  const { theme, toggleTheme } = useThemeStore();
  
  const { handleLogout } = useProfile();

  const handleEditAvatar = () => {
    console.log("Editar avatar");
  };
  
  const handleEditProfile = () => {
    navigation.navigate(ROUTES.EDIT_PROFILE);
  };

  const handlePersonalData = () => {
    navigation.navigate(ROUTES.DAADOS_PESSOAIS);
  };

  const handleNotifications = () => {
    console.log("Notificações");
  };

  const handleTheme = () => {
    toggleTheme();
  };

  const handleChangePassword = () => {
    navigation.navigate(ROUTES.ALTERAR_SENHA);
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
    >
      <AppHeader/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <ProfileHeaderSection
          name={name || "Nome indisponível"}
          email={user?.email?.trim() ?? ""}
          initials={initials}
          onEditAvatar={handleEditAvatar}
          onEditProfile={user ? handleEditProfile : undefined}
        />

        <View style={styles.sectionsContainer}>
          <AccountSection
            onPersonalDataPress={
              handlePersonalData
            }
          />

          <PreferencesSection
            theme={theme === "light" ? "Claro" : "Escuro"}
            onNotificationsPress={
              handleNotifications
            }
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
