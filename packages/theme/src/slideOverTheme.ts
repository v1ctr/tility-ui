import { Sizes } from "./shared";

export interface SlideOverTheme {
  underlay: string;
  overlay: string;
  closeButton: {
    container: string;
    base: string;
    states: {
      enabled: string;
      focused: string;
      hovered: string;
    };
  };
  sizes: Sizes;
}

export const slideOverTheme: SlideOverTheme = {
  underlay: "absolute inset-0 bg-gray-500 bg-opacity-75",
  overlay:
    "flex h-full flex-col overflow-y-scroll bg-white dark:bg-gray-800 shadow-xl outline-none",
  closeButton: {
    container: "absolute top-0 right-0 flex pt-6 pr-3 sm:pr-4 z-30",
    base: "rounded-md outline-none",
    states: {
      enabled: "bg-white dark:bg-gray-800 text-gray-400 dark:text-gray-500",
      focused:
        "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 ring ring-offset-2 dark:ring-offset-gray-900 ring-gray-200 dark:ring-gray-600",
      hovered: "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100",
    },
  },
  sizes: {
    xs: "max-w-sm",
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-xl",
    xl: "max-w-2xl",
  },
};
