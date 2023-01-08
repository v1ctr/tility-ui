import { Sizes } from "./shared";

export interface HeadingTheme {
  variants: {
    primary: string;
    secondary: string;
  };
  sizes: Sizes;
}

export const headingTheme: HeadingTheme = {
  variants: {
    primary: "text-gray-900 dark:text-white",
    secondary: "text-gray-400 dark:text-gray-500",
  },
  sizes: {
    xs: "text-lg leading-5 font-bold md:text-xl md:tracking-normal",
    sm: "text-xl leading-6 font-bold md:text-2xl md:tracking-tight",
    md: "text-2xl leading-7 font-bold md:text-3xl md:tracking-tight",
    lg: "text-3xl leading-8 font-bold md:text-4xl md:tracking-tight",
    xl: "text-4xl leading-9 font-extrabold md:text-5xl md:tracking-tight",
  },
};
