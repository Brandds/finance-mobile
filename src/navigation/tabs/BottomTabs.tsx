import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabBarIcon } from './TabBarIcon';

import { tokens } from '@/theme/tokens';
import { RootTabParamList } from '../types';
import HomeScreen from '@/features/home/screens/HomeScreen';
import { ROUTES } from '../routes';

const Tab = createBottomTabNavigator<RootTabParamList>();

export function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarShowLabel: true,

        tabBarActiveTintColor: tokens.colors.primary,

        tabBarInactiveTintColor:
          tokens.colors.textSecondary,

        tabBarStyle: {
          position: 'absolute',

          height: 74,

          backgroundColor: '#FFFFFF',

          borderTopWidth: 1,

          borderTopColor: '#ECECEC',

          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,

          paddingTop: 10,
          paddingBottom: 12,

          shadowColor: '#000',

          shadowOffset: {
            width: 0,
            height: -2,
          },

          shadowOpacity: 0.08,
          shadowRadius: 10,

          elevation: 10,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          title: 'Home',

          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="home"
              color={color}
            />
          ),
        }}
      />
{/* 
      <Tab.Screen
        name={ROUTES.EXPENSES}
        component={ExpensesScreen}
        options={{
          title: 'Gastos',

          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="payments"
              color={color}
            />
          ),
        }}
      /> */}

      {/* <Tab.Screen
        name={ROUTES.CATEGORIES}
        component={CategoriesScreen}
        options={{
          title: 'Categorias',

          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="category"
              color={color}
            />
          ),
        }}
      /> */}

      {/* <Tab.Screen
        name={ROUTES.SUMMARY}
        component={SummaryScreen}
        options={{
          title: 'Resumo',

          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="pie-chart"
              color={color}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}