import {
  NavigationContainer,
  DefaultTheme,
} from '@react-navigation/native';

import { useEffect } from 'react';

import { ThemeProvider }
from '@/theme/ThemeProvider';

import AppRoutes
from './app.routes';

import AuthRoutes
from './auth.routes';

import { useAuthStore }
from '@/store/auth/auth.store';

import { tokens }
from '@/theme/tokens';

const navigationTheme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,

    background:
      tokens.colors.background,

    primary:
      tokens.colors.primary,
  },
};

export default function Routes() {

  const authenticated =
    useAuthStore(
      (state) => state.authenticated
    );

  const loading =
    useAuthStore(
      (state) => state.loading
    );

  const loadUserStorage =
    useAuthStore(
      (state) => state.loadUserStorage
    );

  useEffect(() => {
    loadUserStorage();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <ThemeProvider>
      <NavigationContainer
        theme={navigationTheme}
      >
        {authenticated ? (
          <AppRoutes />
        ) : (
          <AuthRoutes />
        )}
      </NavigationContainer>
    </ThemeProvider>
  );
}