import { buttonTheme, ButtonTheme } from "./buttonTheme";
import { headingTheme, HeadingTheme } from "./headingTheme";
import { textTheme, TextTheme } from "./textTheme";
import { SlideOverTheme, slideOverTheme } from "./slideOverTheme";

export interface Theme {
  button: ButtonTheme;
  heading: HeadingTheme;
  text: TextTheme;
  slideOver: SlideOverTheme;
}

export const defaultTheme: Theme = {
  button: buttonTheme,
  heading: headingTheme,
  text: textTheme,
  slideOver: slideOverTheme,
};
