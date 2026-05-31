import Screen from "@/components/Screen/Screen";
import SettingsBadge from "@/components/Settings/SettingsBadge";
import SettingsItem from "@/components/Settings/SettingsItem";
import SettingsSection from "@/components/Settings/SettingsSection";
import SettingsToggle from "@/components/Settings/SettingsToggle";
import Typography from "@/components/Typography/Typography";
import { useAuthStore } from "@/store/auth/auth.store";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import ProfileAvatar from "../components/ProfileAvatar";


export default function ProfileScreen() {

  const logout = useAuthStore((state) => state.signOut);
  const user = useAuthStore(state => state.userResponse);

  const [biometricEnabled, setBiometricEnabled] = React.useState<boolean>(false);

  const handlerLogout = () => {
    console.log(user)
    // logout();
  }

  const handleEditAvatar = () => {
    console.log("Edit avatar pressed");
  }

  return (
    <Screen>
      <SettingsSection title="Preferências">
        <SettingsItem
          icon={
            <MaterialIcons
              name="language"
              size={20}
              color="#2563EB"
            />
          }
          title="Idioma"
          value="Português"
          onPress={() => { }}
        />

        <SettingsItem
          icon={
            <MaterialIcons
              name="light-mode"
              size={20}
              color="#2563EB"
            />
          }
          title="Tema"
          value="Claro"
          divider={false}
          onPress={() => { }}
        />
      </SettingsSection>

      <SettingsToggle
        icon={
          <MaterialIcons
            name="fingerprint"
            size={20}
            color="#2563EB"
          />
        }
        title="Biometria"
        value={biometricEnabled}
        onValueChange={setBiometricEnabled}
        divider={false}
      />
      <SettingsItem
        icon={<MaterialIcons
          name="workspace-premium"
          size={20}
          color="#2563EB"
        />}
        title="Idioma"
        rightContent={
          <SettingsBadge label="Português" />
        }
      />
      <ProfileAvatar
  initials="BB"
  editable
  onEditPress={handleEditAvatar}
/>
    </Screen>
  );
}