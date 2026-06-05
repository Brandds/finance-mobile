import { createNativeStackNavigator }
from '@react-navigation/native-stack';

import BottomTabsRoutes
from './tabs/bottom-tabs.routes';

import { RootStackParamList }
from './types/root-stack';
import { ROUTES } from './routes';
import NotificationScreen from '@/features/notification/screen';
import ProfileScreen from '@/features/profile/screen';
import EditProfileScreen from '@/features/profile/screen/editProfile';

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

      <Stack.Screen
        name={ROUTES.NOTIFICATIONS}
        component={NotificationScreen}
      />

      <Stack.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
      />

       <Stack.Screen
        name={ROUTES.EDIT_PROFILE}
        component={EditProfileScreen}
      />
    </Stack.Navigator>
  );
}