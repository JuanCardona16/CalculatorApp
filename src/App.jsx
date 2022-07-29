import './App.css'
import { useState, useEffect } from 'react'
import { ThemeContext } from './contexts/themeContext'
import Calculator from './components/Calculator'

function App() {
  const [theme, setTheme] = useState(() => {
    const initialTheme = window.localStorage.getItem('colorTheme');
    return initialTheme;
  });

  useEffect(() => {
      window.localStorage.setItem('colorTheme', theme);
    }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='App' id={theme} >
        <Calculator />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
