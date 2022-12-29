import { createContext, useContext, ReactNode } from "react";
import { defaultTheme, Theme } from "./theme";

export interface ThemeProviderProps {
  children?: ReactNode;
  theme?: Theme;
}

const ThemeContext = createContext<Theme>({ ...defaultTheme });
export const useTheme = (): Theme => useContext(ThemeContext);

export const ThemeProvider = ({
  children,
  theme = defaultTheme,
}: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={{ ...theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
