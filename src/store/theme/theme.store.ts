import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type ThemeMode = "light" | "dark";

interface ThemeStore {
  theme: ThemeMode;

  isDark: boolean;

  setTheme: (theme: ThemeMode) => void;

  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: "light",

      isDark: false,

      setTheme: (theme) =>
        set({
          theme,
          isDark: theme === "dark",
        }),

      toggleTheme: () => {
        const nextTheme = get().isDark ? "light" : "dark";

        set({
          theme: nextTheme,
          isDark: nextTheme === "dark",
        });
      },
    }),
    {
      name: "theme-storage",

      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);