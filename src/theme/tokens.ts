export const tokens = {
  colors: {
    primary: '#003541',
    onPrimary: '#ffffff',

    secondary: '#076b5a',
    onSecondary: '#ffffff',

    background: '#f8f9ff',
    surface: '#f8f9ff',
    surfaceContainer: '#e5eeff',

    text: '#0b1c30',
    textSecondary: '#40484b',

    error: '#ba1a1a',
    onError: '#ffffff',

    border: '#e2e8f0',
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    screenPadding: 20,
  },

  radius: {
    sm: 4,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,
  },

  typography: {
    display: {
      fontSize: 32,
      fontWeight: '700' as const,
      lineHeight: 40,
    },
    h1: {
      fontSize: 24,
      fontWeight: '700' as const,
      lineHeight: 32,
    },
    h2: {
      fontSize: 20,
      fontWeight: '600' as const,
      lineHeight: 28,
    },
    bodyLg: {
      fontSize: 16,
      fontWeight: '400' as const,
      lineHeight: 24,
    },
    bodyMd: {
      fontSize: 14,
      fontWeight: '400' as const,
      lineHeight: 20,
    },
    labelSm: {
      fontSize: 12,
      fontWeight: '500' as const,
      lineHeight: 16,
      letterSpacing: 0.5,
    },
  },

  shadows: {
    level1: {
      shadowColor: '#0a4d5c',
      shadowOpacity: 0.05,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: 4 },
      elevation: 2,
    },
    level2: {
      shadowColor: '#0a4d5c',
      shadowOpacity: 0.12,
      shadowRadius: 24,
      shadowOffset: { width: 0, height: 8 },
      elevation: 6,
    },
  },
} as const