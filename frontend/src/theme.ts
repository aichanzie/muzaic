import { createTheme } from "@mui/material";
import "@fontsource-variable/open-sans";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F2F2F2",
    },
    secondary: {
      dark: "#535366",
      main: "#96ADD6",
      light: "#D0E3FF",
    },
    background: {
      default: "#F2F2F2",
      paper: "#F2F2F2",
    },
    warning: {
      main: "#E85234",
    },
    text: {
      primary: "#0D0D0D",
    },
  },
  typography: { fontFamily: "Open Sans Variable" },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0D0D0D",
    },
    secondary: {
      dark: "#535366",
      main: "#96ADD6",
      light: "#D0E3FF",
    },
    background: {
      default: "#0D0D0D",
      paper: "#0D0D0D",
    },
    warning: {
      main: "#E85234",
    },
    text: {
      primary: "#F2F2F2",
    },
  },
  typography: { fontFamily: "Open Sans Variable" },
});

export { lightTheme, darkTheme };
