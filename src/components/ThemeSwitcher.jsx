import { useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button className="themeSwitcher" onClick={toggleTheme}>
      <span>{theme === 'dark' ? '🌞' : '🌚'}</span>
    </button>
  )
}

export default ThemeSwitcher