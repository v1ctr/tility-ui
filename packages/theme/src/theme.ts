import { buttonTheme, ButtonTheme } from "./buttonTheme";
import { headingTheme, HeadingTheme } from "./headingTheme";
import { headerTheme, HeaderTheme } from "./headerTheme";
import { textTheme, TextTheme } from "./textTheme";
import { inputTheme, InputTheme } from "./inputTheme";
import { SlideOverTheme, slideOverTheme } from "./slideOverTheme";

export interface Theme {
  button: ButtonTheme;
  heading: HeadingTheme;
  text: TextTheme;
  slideOver: SlideOverTheme;
  header: HeaderTheme;
  input: InputTheme;
}

export const defaultTheme: Theme = {
  button: buttonTheme,
  heading: headingTheme,
  text: textTheme,
  slideOver: slideOverTheme,
  header: headerTheme,
  input: inputTheme,
};
