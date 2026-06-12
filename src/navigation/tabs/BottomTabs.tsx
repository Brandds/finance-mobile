import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabBarIcon } from './TabBarIcon';

import { useTheme } from '@/theme/ThemeProvider';
import { useMemo } from 'react';
import { createTabNavigatorBottonTabsOptions } from '../options/tabNavigatorBottomTabs';
import { RootTabParamList } from '../types';
import { tabs } from './config/tabs';

const Tab = createBottomTabNavigator<RootTabParamList>();

export function BottomTabs() {
   const theme = useTheme();

  const screenOptions = useMemo(
    () => createTabNavigatorBottonTabsOptions(theme),
    [theme]
  );
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
    >
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            title: tab.title,
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                name={tab.icon}
                color={color}
              />
            ),
          }}
        />
      ))}
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