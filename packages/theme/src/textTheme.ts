import { Sizes } from "./shared";

export interface TextTheme {
  variants: {
    primary: string;
    secondary: string;
  };
  sizes: Sizes;
}

export const textTheme: TextTheme = {
  variants: {
    primary: "text-gray-900 dark:text-white",
    secondary: "text-gray-500 dark:text-gray-400",
  },
  sizes: {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  },
};
