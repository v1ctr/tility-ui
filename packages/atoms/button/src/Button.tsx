import React, { MutableRefObject, RefObject } from "react";
import { useButton } from "@react-aria/button";
import { useFocusRing } from "@react-aria/focus";
import { useHover } from "@react-aria/interactions";
import { AriaButtonProps } from "@react-types/button";
import { useTheme, Theme } from "@tility-ui/theme";
import { classNames } from "@tility-ui/utils";

export interface ButtonProps extends AriaButtonProps<"button"> {
  /** Variant of button. */
  variant?: "primary" | "secondary" | "text";
  /** Size of button. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Whether the loading indicator should be shown. */
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { button: theme } = useTheme() as Theme;

    const fallbackRef = React.useRef<HTMLButtonElement>(null);
    const buttonRef = (ref as RefObject<HTMLButtonElement>) || fallbackRef;

    const { buttonProps } = useButton(props, buttonRef);
    const { hoverProps, isHovered } = useHover(props);
    const { isFocusVisible, focusProps } = useFocusRing();
    const { children, variant = "primary", size = "md", isLoading } = props;

    const isDisabled = buttonProps.disabled;

    return (
      <button
        {...buttonProps}
        {...hoverProps}
        {...focusProps}
        className={classNames(
          theme.container,
          theme.variants[variant].base,
          isDisabled ? theme.variants[variant].states.disabled : "",
          isFocusVisible && !isDisabled
            ? theme.variants[variant].states.focused
            : "",
          isHovered && !isDisabled
            ? theme.variants[variant].states.hovered
            : "",
          !isFocusVisible && !isHovered && !isDisabled
            ? theme.variants[variant].states.enabled
            : "",
          theme.sizes[size]
        )}
        ref={buttonRef}
      >
        {isLoading && (
          <svg
            className={classNames(
              theme.spinner.base,
              theme.spinner.sizes[size]
            )}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
