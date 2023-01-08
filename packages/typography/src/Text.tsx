import React, { FC, ReactNode } from "react";
import { useTheme, Theme } from "@tility-ui/theme";
import { classNames } from "@tility-ui/utils";

export interface TextProps {
  /** Content of text. */
  children: ReactNode;
  /** Variant of text. */
  variant?: "primary" | "secondary";
  /** Size of text. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Text: FC<TextProps> = ({
  children,
  variant = "primary",
  size = "md",
}) => {
  const { text: theme } = useTheme() as Theme;

  return (
    <p className={classNames(theme.variants[variant], theme.sizes[size])}>
      {children}
    </p>
  );
};

Text.displayName = "Text";
