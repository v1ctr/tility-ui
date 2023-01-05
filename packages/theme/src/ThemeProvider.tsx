import { createContext, useContext, ReactNode } from "react";
import { mergeDeep } from "@tility-ui/utils";
import { defaultTheme, Theme } from "./theme";

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export interface ThemeProviderProps {
  children?: ReactNode;
  theme?: DeepPartial<Theme>;
}

const ThemeContext = createContext<Theme>({ ...defaultTheme });
export const useTheme = (): Theme => useContext(ThemeContext);

export const ThemeProvider = ({
  children,
  theme: customTheme = {},
}: ThemeProviderProps) => {
  const mergedTheme = mergeDeep(defaultTheme, customTheme);

  return (
    <ThemeContext.Provider value={{ ...mergedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
