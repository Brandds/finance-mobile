import { createNativeStackNavigator }
from "@react-navigation/native-stack";

import HomeScreen
from "@/features/home/screens/HomeScreen";

import homeOptions
from "./options/homeOptions";
import { RootStackParamList } from "./types";

const Stack =
  createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={homeOptions}
      />
    </Stack.Navigator>
  );
}