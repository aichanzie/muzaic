import "./App.css";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import { Button } from "@mui/material";
import { CssBaseline } from "@mui/material/";
import darkLogo from "./assets/muzaic_dark.svg";
import "@fontsource-variable/open-sans";
import NavigationBar from "./components/navigation/navBar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const [themeIcon, setThemeIcon] = useState("WbSunnyRounded");

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }),
    [isDarkMode];

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <NavigationBar
        isDarkMode={isDarkMode}
        onSelectTheme={toggleTheme}
      ></NavigationBar>
      <CssBaseline />
      <div style={{ padding: "20px" }}>
        <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
