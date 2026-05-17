import { createNativeStackNavigator }
from "@react-navigation/native-stack";

import LoginScreen
from "@/features/auth/screens/LoginScreen";
import { RootStackParamList } from "./types";

const Stack =
  createNativeStackNavigator<RootStackParamList>();

export default function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}