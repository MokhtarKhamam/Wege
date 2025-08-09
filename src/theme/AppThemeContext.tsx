"use client";
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { createContext, useContext, useMemo } from "react";
import type {} from "@mui/material/themeCssVarsAugmentation";

const AppThemeContext = createContext(null);

const AppThemeProvider = (props: { children: React.ReactNode }) => {
  const theme = useMemo(() => {
    return responsiveFontSizes(
      createTheme({
        cssVariables: {
          colorSchemeSelector: "class",
          disableCssColorScheme: true,
        },
        palette: {
          primary: {
            main: "#1976d2",
            contrastText: "#ffffff",
          },
          secondary: {
            main: "#ff9800",
            contrastText: "#ffffff",
          },
          info: {
            main: "#4cafef",
          },
        },
        colorSchemes: {
          light: {
            palette: {
              primary: { main: "#1976d2" },
              secondary: { main: "#ff9800" },
              background: {
                default: "#f5f5f5",
                paper: "#ffffff",
              },
              text: {
                primary: "#212121",
                secondary: "#555555",
              },
            },
          },
          dark: {
            palette: {
              primary: { main: "#90caf9" },
              secondary: { main: "#ffb74d" },
              background: {
                default: "#121212",
                paper: "#1e1e1e",
              },
              text: {
                primary: "#ffffff",
                secondary: "#b0b0b0",
              },
            },
          },
        },
      })
    );
  }, []);

  return (
    <AppThemeContext.Provider value={null}>
      <ThemeProvider theme={theme} disableTransitionOnChange>
        <CssBaseline enableColorScheme />
        {props.children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export const useAppThemeContext = () => useContext(AppThemeContext);

export default AppThemeProvider;
