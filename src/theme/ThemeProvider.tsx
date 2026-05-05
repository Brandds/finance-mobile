import React, { createContext, useContext } from 'react'
import { theme, Theme } from './theme'

const ThemeContext = createContext<Theme>(theme)

type Props = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)