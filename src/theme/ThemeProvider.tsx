import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { getColorPalette } from "./theme";
import { createContext, useState } from "react";

export const ToggleThemeContext = createContext(() => {});

const Theme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState<"light" | "dark">("light");

  const theme = createTheme({
    ...getColorPalette(activeTheme),
  });

  const toggleTheme = () => {
    if (activeTheme === "light") {
      setActiveTheme("dark");
    } else {
      setActiveTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        <CssBaseline>{children}</CssBaseline>
      </ToggleThemeContext.Provider>
    </ThemeProvider>
  );
};

export default Theme;
