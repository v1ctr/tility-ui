import React, { FC, ElementType, ReactNode } from "react";
import { useTheme, Theme } from "@tility-ui/theme";
import { classNames } from "@tility-ui/utils";

export interface HeaderProps {
  /** Content of header. */
  children: ReactNode;
  /** Variant of header. */
  variant?: "primary" | "secondary";
  /** Size of header. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** The HTML element the header should be rendered as. */
  as?: "div" | "header";
}

export const Header: FC<HeaderProps> = ({
  children,
  variant = "primary",
  size = "md",
  as = "div" as ElementType,
}) => {
  const { header: theme } = useTheme() as Theme;
  const Component = as;

  return (
    <Component
      className={classNames(
        theme.base,
        theme.variants[variant],
        theme.sizes[size]
      )}
    >
      {children}
    </Component>
  );
};

Header.displayName = "Header";
