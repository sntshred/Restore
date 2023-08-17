import Catalog from "../../feature/catalog/Catalog";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType
    }
  })

  function changeTheme() {
    setDarkMode(!false);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <CssBaseline />
        <Header darkMode={darkMode} handleThemeChange={changeTheme} />
        <Container>
          <Catalog />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
