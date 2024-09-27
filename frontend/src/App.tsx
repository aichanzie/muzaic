import './App.css'
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import { Button } from '@mui/material';
import { CssBaseline } from '@mui/material/';
import '@fontsource-variable/open-sans';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }), [isDarkMode];

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline/>
      <div style={{ padding: '20px' }}>
        <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
        <Button variant="contained" onClick={toggleTheme}>
          Toggle Theme
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App
