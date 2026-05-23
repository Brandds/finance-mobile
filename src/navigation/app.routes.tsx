import { createNativeStackNavigator }
from '@react-navigation/native-stack';

import BottomTabsRoutes
from './tabs/bottom-tabs.routes';

import { RootStackParamList }
from './types/root-stack';
import { ROUTES } from './routes';

const Stack =
  createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={ROUTES.MAIN_TABS}
        component={BottomTabsRoutes}
      />
    </Stack.Navigator>
  );
}