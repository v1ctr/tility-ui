import { Sizes } from "./shared";

export interface ButtonVariant {
  base: string;
  states: {
    enabled: string;
    disabled: string;
    focused: string;
    hovered: string;
  };
}

export interface ButtonTheme {
  container: string;
  spinner: {
    base: string;
    sizes: Sizes;
  };
  variants: {
    primary: ButtonVariant;
    secondary: ButtonVariant;
    text: ButtonVariant;
  };
  sizes: Sizes;
}

export const buttonTheme: ButtonTheme = {
  container:
    "w-full inline-flex justify-center items-center rounded-md font-medium sm:w-auto",
  spinner: {
    base: "animate-spin",
    sizes: {
      xs: "mr-2 w-3.5 h-3.5",
      sm: "-ml-1 mr-2 w-4 h-4",
      md: "-ml-1 mr-2 w-5 h-5",
      lg: "-ml-2 mr-3 w-5 h-5",
      xl: "-ml-2 mr-3 w-6 h-6",
    },
  },
  variants: {
    primary: {
      base: "shadow-sm border outline-none",
      states: {
        enabled:
          "bg-primary-600 dark:bg-primary-700 border-transparent text-white",
        disabled:
          "bg-primary-600/60 dark:bg-primary-700/60 text-white/70 dark:text-white/60 border-transparent",
        focused:
          "bg-primary-600 dark:bg-primary-700 border-transparent text-white ring ring-offset-2 dark:ring-offset-gray-900 ring-gray-200 dark:ring-gray-600",
        hovered:
          "bg-primary-700 dark:bg-primary-800 border-primary-700 dark:border-primary-800 text-white",
      },
    },
    secondary: {
      base: "shadow-sm border outline-none",
      states: {
        enabled:
          "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200",
        disabled:
          "bg-white/60 dark:bg-gray-900/60 border-gray-300 dark:border-gray-600 text-gray-700/60 dark:text-gray-200/60",
        focused:
          "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 ring ring-offset-2 dark:ring-offset-gray-900 ring-gray-200 dark:ring-gray-600",
        hovered:
          "bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200",
      },
    },
    text: {
      base: "outline-none",
      states: {
        enabled: "text-primary-600 dark:text-primary-500",
        disabled: "text-primary-600/60 dark:text-primary-500/60",
        focused:
          "text-primary-600 dark:text-primary-500 ring ring-offset-2 dark:ring-offset-gray-900 ring-gray-200 dark:ring-gray-600",
        hovered:
          "bg-primary-50 dark:bg-gray-800 text-primary-700 dark:text-primary-400",
      },
    },
  },
  sizes: {
    xs: "px-2 py-1.5 text-sm sm:text-xs",
    sm: "px-3.5 py-1.5 text-base sm:text-sm",
    md: "px-4 py-2 text-base sm:text-sm",
    lg: "px-5 py-2.5 text-lg sm:text-base",
    xl: "px-6 py-3 text-lg sm:text-base",
  },
};
