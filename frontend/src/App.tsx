import "./App.css";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import { CssBaseline } from "@mui/material/";
import "@fontsource-variable/open-sans";
import NavigationBar from "./components/navigation/navBar";
import SiteRouter from "./components/routing/siteRouter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

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
      <SiteRouter />
    </ThemeProvider>
  );
}

export default App;
