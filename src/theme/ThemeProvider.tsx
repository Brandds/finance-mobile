import React, { createContext, useContext } from "react";

import { darkTheme, lightTheme, Theme } from "./theme";

import { useThemeStore } from "@/store/theme/theme.store";

const ThemeContext = createContext<Theme>(lightTheme);

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const { isDark } = useThemeStore();

  const currentTheme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={currentTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);