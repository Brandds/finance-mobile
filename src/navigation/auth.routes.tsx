import { createNativeStackNavigator }
from "@react-navigation/native-stack";

import LoginScreen
from "@/features/auth/screens/LoginScreen";
import { RootStackParamList } from "./types";
import RegisterScreen from "@/features/auth/screens/RegisterScreen";
import { ROUTES } from "./routes";

const Stack =
  createNativeStackNavigator<RootStackParamList>();

export default function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ROUTES.REGISTER}
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}