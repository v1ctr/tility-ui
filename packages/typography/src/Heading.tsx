import React, { FC, ElementType, ReactNode } from "react";
import { useTheme, Theme } from "@tility-ui/theme";
import { classNames } from "@tility-ui/utils";

export interface HeadingProps {
  /** Content of heading. */
  children: ReactNode;
  /** Variant of heading. */
  variant?: "primary" | "secondary";
  /** Size of heading. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** The HTML element the heading should be rendered as. */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading: FC<HeadingProps> = ({
  children,
  variant = "primary",
  size = "md",
  as = "h1" as ElementType,
}) => {
  const { heading: theme } = useTheme() as Theme;
  const Component = as;

  return (
    <Component
      className={classNames(theme.variants[variant], theme.sizes[size])}
    >
      {children}
    </Component>
  );
};

Heading.displayName = "Heading";
