// theme.ts
import { tokens } from './tokens'

export type Theme = typeof tokens

export const theme: Theme = tokens

export const useTheme = () => theme