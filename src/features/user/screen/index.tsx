import Screen from "@/components/Screen/Screen";
import Typography from "@/components/Typography/Typography";
import { useAuthStore } from "@/store/auth/auth.store";
import { View } from "react-native";


export default function UserScreen() {

  const logout = useAuthStore((state) => state.signOut);
  
  const handlerLogout = () => {
    logout();
  }
  return (
    <Screen>
      <Typography variant="h1">
        User Screen
      </Typography>
      <Typography variant="h2" onPress={handlerLogout}>
        Sair
      </Typography>
    </Screen>
  );
}