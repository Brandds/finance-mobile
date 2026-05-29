import Screen from "@/components/Screen/Screen";
import SettingsItem from "@/components/Settings/SettingsItem";
import SettingsSection from "@/components/Settings/SettingsSection";
import Typography from "@/components/Typography/Typography";
import { useAuthStore } from "@/store/auth/auth.store";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";


export default function ProfileScreen() {

  const logout = useAuthStore((state) => state.signOut);
  const user = useAuthStore(state => state.userResponse);
  
  const handlerLogout = () => {
    console.log(user)
    // logout();
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
    onPress={() => {}}
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
    onPress={() => {}}
  />
</SettingsSection>
    </Screen>
  );
}