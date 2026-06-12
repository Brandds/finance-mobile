import { darkColors } from "./colors/dark";
import { lightColors } from "./colors/light";
import { radius } from "./radius";
import { shadows } from "./shadows";
import { spacing } from "./spacing";
import { typography } from "./typography";

const createTheme = (colors: typeof lightColors) => ({
  colors,
  spacing,
  typography,
  radius,
  shadows,
});

export const lightTheme = createTheme(lightColors);
export const darkTheme = createTheme(darkColors);

export type Theme = typeof lightTheme;