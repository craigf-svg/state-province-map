'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { createAppTheme } from './theme';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function Providers({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const wasDark = savedTheme === 'dark';
    setIsDark(wasDark);
    document.documentElement.classList.toggle('dark', wasDark);
  }, []);

  function toggleTheme() {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newIsDark);
  };

  const theme = useMemo(() => {
    return createAppTheme(isDark);
  }, [isDark]);

  const contextValue = useMemo(() => ({
    isDark,
    toggleTheme
  }), [isDark, toggleTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};
