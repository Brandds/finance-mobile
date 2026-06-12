import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabParamList } from '../types/bottom-tabs';


import { TabBarIcon } from './TabBarIcon';

import HomeScreen from '@/features/home/screens/HomeScreen';
import { useTheme } from '@/theme/ThemeProvider';
import { useMemo } from 'react';
import { createTabNavigatorOptions } from '../options/tabNavigatorOptions';
import { ROUTES } from '../routes';

const Tab =
  createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabsRoutes() {
  const theme = useTheme();

  const screenOptions = useMemo(
    () => createTabNavigatorOptions(theme),
    [theme]
  );
  
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
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

      {/* <Tab.Screen
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
      />

      <Tab.Screen
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
      />

      <Tab.Screen
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