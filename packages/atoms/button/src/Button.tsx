import { FC, ReactNode } from "react";
import { useTheme, Theme } from "@tility-ui/theme";
import { classNames } from "@tility-ui/utils";

export interface ButtonProps {
  children?: ReactNode;
  /** Variant of button. */
  variant?: "primary" | "secondary" | "text";
  /** Size of button. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
}: ButtonProps) => {
  const { button: theme } = useTheme() as Theme;

  return (
    <button
      className={classNames(
        theme.container,
        theme.variants[variant],
        theme.sizes[size]
      )}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";
