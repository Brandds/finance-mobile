import { ActivityIndicator, Pressable, ScrollView, View } from "react-native";
import { useEffect, useRef } from "react";
import AppBottomSheet from "@/components/BottomSheet";
import { AppBottomSheetRef } from "@/components/BottomSheet/types";
import Typography from "@/components/Typography/Typography";
import ProfileAvatar from "../components/Profile/ProfileAvatar";
import { useTheme } from "@/theme/ThemeProvider";
import { useAvatar } from "../hooks/useAvatar";
import { avatarStyles } from "../styles/avatar.styles";
import { getProfile } from "../service/user.service";

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
  const avatar = useAvatar();
  const sheet = useRef<AppBottomSheetRef>(null);
  const themeColors = useTheme();
  const avatarStyle = avatarStyles(themeColors);
  useEffect(() => {
    const { token, userResponse } = useAuthStore.getState();
    if (!token || !userResponse) return;
    getProfile().then(profile => {
      const current = useAuthStore.getState();
      if (current.token === token && current.userResponse?.id === userResponse.id) {
        void current.updateUser(profile);
      }
    }).catch(() => undefined);
  }, []);

  const handleEditAvatar = () => {
    sheet.current?.present();
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
          imageUrl={user?.displayPicture ?? undefined}
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
      <AppBottomSheet ref={sheet} snapPoints={["42%"]}>
        <View style={avatarStyle.sheetContent}>
          {avatar.image ? (
            <>
              <ProfileAvatar imageUrl={avatar.image.uri} size={96} />
              <Typography variant="body1">Usar esta foto?</Typography>
              <Pressable style={avatarStyle.action} disabled={avatar.busy} onPress={async () => { if (await avatar.upload()) sheet.current?.dismiss(); }} accessibilityRole="button" accessibilityLabel="Usar foto">
                <Typography variant="body1">Usar foto</Typography>
              </Pressable>
            </>
          ) : (
            <>
              <Pressable style={avatarStyle.action} disabled={avatar.busy} onPress={avatar.chooseImage} accessibilityRole="button" accessibilityLabel="Escolher foto da galeria">
                <Typography variant="body1">Escolher da galeria</Typography>
              </Pressable>
              {avatar.canRemove && <Pressable style={avatarStyle.action} disabled={avatar.busy} onPress={avatar.confirmRemove} accessibilityRole="button" accessibilityLabel="Remover foto de perfil">
                <Typography variant="body1">Remover foto</Typography>
              </Pressable>}
            </>
          )}
          {avatar.busy && <ActivityIndicator color={themeColors.colors.primary} accessibilityLabel="Processando foto" />}
          <Pressable style={avatarStyle.action} disabled={avatar.busy} onPress={() => { avatar.cancel(); sheet.current?.dismiss(); }} accessibilityRole="button" accessibilityLabel="Cancelar edição da foto">
            <Typography variant="body1">Cancelar</Typography>
          </Pressable>
        </View>
      </AppBottomSheet>
    </Screen>

  );
}
