import React from 'react'
import useLocalStorage from 'use-local-storage'
// import Switch from "react-switch";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAlignCenter, faMoon } from '@fortawesome/free-solid-svg-icons'
// import { faSun } from '@fortawesome/free-solid-svg-icons'


import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'light' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="App" data-theme={theme}>
      <Router>
        <Home />
      </Router>
    </div>
  )
}

export default App