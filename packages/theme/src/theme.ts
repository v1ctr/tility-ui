import { buttonTheme, ButtonTheme } from "./buttonTheme";

export interface Theme {
  button: ButtonTheme;
}

export const defaultTheme: Theme = {
  button: buttonTheme,
};
