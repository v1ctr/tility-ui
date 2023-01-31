import { Sizes } from "./shared";

export interface InputVariant {
  base: string;
  states: {
    enabled: string;
    disabled: string;
    focused: string;
    hovered: string;
    invalid: string;
  };
}

export interface InputTheme {
  container: string;
  variants: {
    primary: InputVariant;
    secondary: InputVariant;
  };
  label: string;
  description: string;
  errorMessage: string;
  sizes: Sizes;
}

export const inputTheme: InputTheme = {
  container: "block w-full",
  variants: {
    primary: {
      base: "block w-full border shadow-sm rounded-md outline-none",
      states: {
        enabled:
          "bg-white text-gray-900 dark:text-white border-gray-300 dark:bg-gray-700 focus:ring-0 focus:ring-offset-0",
        disabled:
          "bg-white dark:bg-gray-700 text-gray-900/60 dark:text-white/60 border-gray-300 dark:bg-gray-700 focus:ring-0 focus:ring-offset-0",
        hovered:
          "bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:bg-gray-700 focus:ring-0 focus:ring-offset-0",
        focused:
          "bg-white text-gray-900 dark:text-white border-gray-300 dark:bg-gray-700 outline-none focus:ring focus:dark:ring-offset-gray-900 focus:ring-blue-200 focus:dark:ring-gray-600",
        invalid:
          "bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-red-400 focus:ring-0 focus:ring-offset-0",
      },
    },
    secondary: {
      base: "block w-full border rounded-md outline-none",
      states: {
        enabled:
          "bg-gray-100 text-gray-900 dark:text-white border-gray-300 dark:bg-gray-700 focus:ring-0 focus:ring-offset-0",
        disabled:
          "bg-white dark:bg-gray-700 text-gray-900/60 dark:text-white/60 border-gray-300 dark:bg-gray-700 focus:ring-0 focus:ring-offset-0",
        hovered:
          "bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:bg-gray-700 focus:ring-0 focus:ring-offset-0",
        focused:
          "bg-white text-gray-900 dark:text-white border-gray-300 dark:bg-gray-700 outline-none focus:ring focus:dark:ring-offset-gray-900 focus:ring-blue-200 focus:dark:ring-gray-600",
        invalid:
          "bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-red-400 focus:ring-0 focus:ring-offset-0",
      },
    },
  },
  label: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300",
  description: "mt-2 text-sm text-gray-400 dark:text-gray-500",
  errorMessage: "mt-2 text-sm text-red-400",
  sizes: {
    xs: "text-sm sm:text-xs",
    sm: "text-base sm:text-sm",
    md: "text-base sm:text-sm",
    lg: "text-lg sm:text-base",
    xl: "text-lg sm:text-base",
  },
};
