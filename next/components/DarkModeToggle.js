'use client'
import { useState } from "react"
import IconButton from '@mui/material/IconButton'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggle = () => {
    const newIsDark = document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    setIsDark(newIsDark)
  }

  return (
    <IconButton
      onClick={toggle}
      sx={{
        position: 'absolute', 
        top: 16, 
        right: 16, 
        fontSize: '1.5rem',
        color: 'rgba(0, 0, 0, 1)',
        ':hover': { 
          backgroundColor:  'rgba(0,0,0,0)'
        }
      }}
    >
      {isDark ? '🌙' : '☀️'}
    </IconButton>
  )
}