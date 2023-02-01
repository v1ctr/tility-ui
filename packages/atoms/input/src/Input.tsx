import React, { RefObject } from "react";
import { useTextField } from "@react-aria/textfield";
import { useFocusRing } from "@react-aria/focus";
import { useHover } from "@react-aria/interactions";
import { AriaTextFieldProps } from "@react-types/textfield";
import { useTheme, Theme } from "@tility-ui/theme";
import { classNames } from "@tility-ui/utils";

export interface InputProps extends AriaTextFieldProps {
  /** Variant of button. */
  variant?: "primary" | "secondary";
  /** Size of button. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { input: theme } = useTheme() as Theme;

    const fallbackRef = React.useRef<HTMLInputElement>(null);
    const inputRef = (ref as RefObject<HTMLInputElement>) || fallbackRef;

    const { labelProps, inputProps, descriptionProps, errorMessageProps } =
      useTextField(props, inputRef);
    const { hoverProps, isHovered } = useHover(props);
    const { isFocused, focusProps } = useFocusRing({ isTextInput: true });
    const {
      variant = "primary",
      size = "md",
      label,
      description,
      errorMessage,
      validationState,
      isDisabled,
    } = props;

    //const { children, variant = "primary", size = "md", isLoading } = props;
    const isInvalid = errorMessage || validationState === "invalid";

    return (
      <div className={theme.container}>
        {label && (
          <label className={theme.label} {...labelProps}>
            {label}
          </label>
        )}
        <input
          {...inputProps}
          {...hoverProps}
          {...focusProps}
          className={classNames(
            theme.variants[variant].base,
            isDisabled ? theme.variants[variant].states.disabled : "",
            isInvalid && !isFocused
              ? theme.variants[variant].states.invalid
              : "",
            isFocused && !isDisabled
              ? theme.variants[variant].states.focused
              : "",
            isHovered && !isFocused && !isDisabled && !isInvalid
              ? theme.variants[variant].states.hovered
              : "",
            !isFocused && !isHovered && !isDisabled && !isInvalid
              ? theme.variants[variant].states.enabled
              : "",
            theme.sizes[size]
          )}
          ref={ref}
        />
        {description && (
          <p {...descriptionProps} className={theme.description}>
            {description}
          </p>
        )}
        {errorMessage && (
          <p {...errorMessageProps} className={theme.errorMessage}>
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
