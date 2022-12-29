export interface ButtonTheme {
  container: string;
  spinner: string;
  variants: {
    primary: string;
    secondary: string;
    text: string;
  };
  sizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export const buttonTheme: ButtonTheme = {
  container:
    "w-full inline-flex justify-center rounded-md font-medium sm:w-auto",
  spinner: "animate-spin -ml-1 mr-3 h-5 w-5",
  variants: {
    primary:
      "shadow-sm border outline-none bg-blue-600 dark:bg-blue-700 border-transparent text-white hover:bg-blue-700 hover:dark:bg-blue-800",
    secondary:
      "shadow-sm border outline-none bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 hover:dark:bg-gray-800",
    text: "outline-none text-blue-600 dark:text-blue-500 hover:text-blue-700 hover:dark:text-blue-400",
  },
  sizes: {
    xs: "px-2 py-1.5 text-sm sm:text-xs",
    sm: "px-3.5 py-1.5 text-base sm:text-sm",
    md: "px-4 py-2 text-base sm:text-sm",
    lg: "px-5 py-2.5 text-lg sm:text-base",
    xl: "px-6 py-3 text-lg sm:text-base",
  },
};
