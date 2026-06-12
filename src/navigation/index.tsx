import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useEffect } from "react";

import { ThemeProvider } from "@/theme/ThemeProvider";
import { ToastProvider } from "@/providers/ToastProvider";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

import { useAuthStore } from "@/store/auth/auth.store";
import { useTheme } from "@/theme/useTheme";

function Navigation() {
  const theme = useTheme();

  const authenticated = useAuthStore(
    (state) => state.authenticated
  );

  const navigationTheme = {
    ...DefaultTheme,

    colors: {
      ...DefaultTheme.colors,

      background: theme.colors.background,
      primary: theme.colors.primary,
      card: theme.colors.surface,
      text: theme.colors.text,
      border: theme.colors.border,
    },
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      {authenticated ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}

export default function Routes() {
  const loading = useAuthStore((state) => state.loading);

  const loadUserStorage = useAuthStore(
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
      <ToastProvider>
        <Navigation />
      </ToastProvider>
    </ThemeProvider>
  );
}