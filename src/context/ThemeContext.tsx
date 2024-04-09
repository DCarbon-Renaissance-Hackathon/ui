'use client'
import { store } from '@/app/stote'
import { ReactNode, createContext, useContext, useState } from 'react'
import { Provider } from 'react-redux'

// Định nghĩa kiểu cho các chủ đề của bạn
type Theme = 'light' | 'dark'

// Định nghĩa ngữ cảnh
interface ThemeContextType {
  theme: Theme
  // eslint-disable-next-line no-unused-vars
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Định nghĩa nhà cung cấp
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Provider store={store}>{children}</Provider>
    </ThemeContext.Provider>
  )
}

// Hook tùy chỉnh để sử dụng chủ đề
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
