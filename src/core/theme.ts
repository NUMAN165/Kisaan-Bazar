export const theme = {
  colors: {
    primary: '#154212', // Deep Forest Green
    onPrimary: '#ffffff',
    primaryContainer: '#2d5a27',
    onPrimaryContainer: '#9dd090',
    secondary: '#904d00', // Warm Clay
    onSecondary: '#ffffff',
    secondaryContainer: '#fe932c',
    onSecondaryContainer: '#663500',
    tertiary: '#00431e', // Fresh Leaf Green (adjusted)
    onTertiary: '#ffffff',
    tertiaryContainer: '#005d2d',
    onTertiaryContainer: '#48dc7f',
    background: '#f8f9fa',
    onBackground: '#191c1d',
    surface: '#f8f9fa',
    onSurface: '#191c1d',
    onSurfaceVariant: '#42493e',
    outlineVariant: '#c2c9bb',
    error: '#ba1a1a',
    onError: '#ffffff',
  },
  typography: {
    fontFamily: 'Public Sans',
    displayLg: {
      fontSize: 32,
      fontWeight: '700' as const,
      lineHeight: 40,
    },
    displayMd: {
      fontSize: 24,
      fontWeight: '700' as const,
      lineHeight: 32,
    },
    bodyXl: {
      fontSize: 20,
      fontWeight: '500' as const,
      lineHeight: 28,
    },
    bodyLg: {
      fontSize: 18,
      fontWeight: '400' as const,
      lineHeight: 26,
    },
    labelXl: {
      fontSize: 18,
      fontWeight: '700' as const,
      lineHeight: 24,
      letterSpacing: 0.36,
    },
    priceLg: {
      fontSize: 28,
      fontWeight: '700' as const,
      lineHeight: 32,
    },
  },
  spacing: {
    xs: 4,
    base: 8,
    sm: 12,
    md: 20,
    lg: 32,
    xl: 48,
    edgeMargin: 20,
    touchTargetMin: 56,
  },
  borderRadius: {
    sm: 4,
    default: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,
  },
};
