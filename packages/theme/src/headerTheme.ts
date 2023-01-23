import { Sizes } from "./shared";

export interface HeaderTheme {
  base: string;
  variants: {
    primary: string;
    secondary: string;
  };
  sizes: Sizes;
}

export const headerTheme: HeaderTheme = {
  base: "flex flex-none items-center justify-between w-full px-5",
  variants: {
    primary: "bg-white dark:bg-gray-900 border-b dark:border-gray-600",
    secondary: "bg-gray-100 dark:bg-gray-600",
  },
  sizes: {
    xs: "h-12",
    sm: "h-16",
    md: "h-20",
    lg: "h-24",
    xl: "h-28",
  },
};
