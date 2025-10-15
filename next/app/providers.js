'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Raleway } from 'next/font/google';
import { Roboto } from 'next/font/google';

const raleway = Raleway({
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
});

const roboto = Roboto({
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
});

const theme = createTheme({
    typography: {
        fontFamily: `${raleway.style.fontFamily}, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
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
                    color: '#64748b',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    '&:hover': {
                        backgroundColor: '#f8fafc',
                        border: '1px solid #f8fafc'
                    },
                    '&.Mui-selected': {
                        color: '#ffffff',
                        backgroundColor: '#3b82f6',
                        border: '1px solid #3b82f6',
                        '&:hover': {
                            backgroundColor: '#2563eb',
                        },
                    },
                },
            },
        },
    },
});

export default function Providers({ children }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}
