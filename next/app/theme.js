'use client';

import { createTheme } from '@mui/material/styles';
import { Raleway, Roboto } from 'next/font/google';
const raleway = Raleway({ subsets: ['latin'], display: 'swap' });
const roboto = Roboto({ subsets: ['latin'], display: 'swap', weight: '400' });

const blue = {
  main: '#3b82f6',
  hover: '#2563eb',
};

const lightColors = {
  background: { default: '#ffffff', paper: '#ffffff' },
  text: { primary: '#111827', secondary: '#4b5563' },
  toggle: { color: '#64748b', bg: '#f8fafc', border: '#e2e8f0' },
};

const darkColors = {
  background: { default: '#121212', paper: '#0f172a' },
  text: { primary: '#e5e7eb', secondary: '#94a3b8' },
  toggle: { color: '#cbd5e1', bg: '#0b1220', border: '#1e293b' },
};

export function createAppTheme(isDark) {
  const palette = isDark ? darkColors : lightColors;

  return createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
      background: palette.background,
      text: palette.text,
    },
    typography: {
      fontFamily: `${raleway.style.fontFamily}, system-ui, sans-serif`,
      body2: { fontFamily: roboto.style.fontFamily },
    },
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            fontFamily: roboto.style.fontFamily,
            fontSize: '1.11rem',
            fontWeight: 400,
            lineHeight: 1.6,
          },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            color: palette.toggle.color,
            backgroundColor: palette.toggle.bg,
            border: `1px solid ${palette.toggle.border}`,
            '&:hover': {
              backgroundColor: palette.toggle.bg,
              border: `1px solid ${palette.toggle.border}`,
            },
            '&.Mui-selected': {
              color: '#fff',
              backgroundColor: blue.main,
              border: `1px solid ${blue.main}`,
              '&:hover': {
                backgroundColor: blue.hover,
              },
            },
          },
        },
      },
    },
  });
}