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
import DadosPessoaisScreen from '@/features/profile/screen/dadosPessoaisScreen';
import ChangePassword from '@/features/changePassword/screen/changePassword.screen';
import AddExpenseScreen from '@/features/expense/screens/AddExpense';

import ExpenseDetailsScreen from "@/features/expense/screens/ExpenseDetailsScreen";

const Stack =
  createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.MAIN_TABS}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.EXPENSE_DETAILS} component={ExpenseDetailsScreen} options={{ headerShown: true, title: "Detalhes do gasto" }} />
      <Stack.Screen name={ROUTES.EDIT_EXPENSE} component={AddExpenseScreen} options={{ headerShown: true, title: "Editar gasto" }} />
      <Stack.Screen name={ROUTES.ADD_EXPENSE} component={AddExpenseScreen} options={{ headerShown: true, title: 'Novo gasto' }} />
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

      <Stack.Screen
        name={ROUTES.DAADOS_PESSOAIS}
        component={DadosPessoaisScreen}
      />
      <Stack.Screen
        name={ROUTES.ALTERAR_SENHA}
        component={ChangePassword}
      />
    </Stack.Navigator>
  );
}
