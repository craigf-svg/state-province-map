'use client'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '../app/providers'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <IconButton onClick={toggleTheme} sx={{ position: 'absolute', top: 16, right: 16, fontSize: '1.5rem' }}>
      {isDark ? '🌙' : '☀️'}
    </IconButton>
  )
}