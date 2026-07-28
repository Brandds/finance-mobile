import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabParamList } from '../types/bottom-tabs';


import { TabBarIcon } from './TabBarIcon';

import CategoryScreen from '@/features/category/screens/CategoryScreen';
import ExpensesScreen from '@/features/expense/screens';
import HomeScreen from '@/features/home/screens/HomeScreen';
import { useTheme } from '@/theme/ThemeProvider';
import { useMemo } from 'react';
import { createTabNavigatorOptions } from '../options/tabNavigatorOptions';
import { ROUTES } from '../routes';
import MonthlySummaryScreen from '@/features/monthly-summary/screen';

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

      <Tab.Screen
        name={ROUTES.EXPENSES}
        component={ExpensesScreen}
        options={{
          title: 'Gastos',

          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="receipt"
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.CATEGORIAS}
        component={CategoryScreen}
        options={{
          title: 'Categoria',

          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="category"
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.RESUMO_MENSAL}
        component={MonthlySummaryScreen}
        options={{
          title: 'Resumo',

          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="pie-chart"
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}