import { buttonTheme, ButtonTheme } from "./buttonTheme";
import { headingTheme, HeadingTheme } from "./headingTheme";
import { textTheme, TextTheme } from "./textTheme";

export interface Theme {
  button: ButtonTheme;
  heading: HeadingTheme;
  text: TextTheme;
}

export const defaultTheme: Theme = {
  button: buttonTheme,
  heading: headingTheme,
  text: textTheme,
};
