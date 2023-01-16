import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import {
  useOverlay,
  usePreventScroll,
  useModal,
  OverlayContainer,
} from "@react-aria/overlays";
import { AriaDialogProps, useDialog } from "@react-aria/dialog";
import { FocusScope, useFocusRing } from "@react-aria/focus";
import { useHover, HoverProps } from "@react-aria/interactions";
import { useButton } from "@react-aria/button";
import { useTheme, Theme } from "@tility-ui/theme";
import { classNames } from "@tility-ui/utils";

export { AnimatePresence } from "framer-motion";

export interface SlideOverProps extends AriaDialogProps {
  /** Content of SlideOver. */
  children: ReactNode;
  /** Handler that is called when the SlideOver is closed. */
  onClose(): any;
  /** Size of SlideOver. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const SlideOver: FC<SlideOverProps> = (props) => {
  const { onClose, children, size = "md" } = props;
  const { slideOver: theme } = useTheme() as Theme;

  const ref = React.useRef<HTMLDivElement>(null);
  const { overlayProps, underlayProps } = useOverlay(props, ref);

  usePreventScroll();
  const { modalProps } = useModal();
  const { dialogProps } = useDialog(props, ref);

  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const { buttonProps: closeButtonProps } = useButton(
    {
      onPress: () => onClose(),
    },
    closeButtonRef
  );
  const { hoverProps: closeButtonHoverProps, isHovered: isCloseButtonHovered } =
    useHover(props as HoverProps);
  const {
    isFocusVisible: isCloseButtonFocusVisible,
    focusProps: closeButtonFocusProps,
  } = useFocusRing();

  return (
    <OverlayContainer>
      <div
        className="fixed inset-0 overflow-hidden z-30"
        aria-labelledby="slide-over"
        role="dialog"
        aria-modal="true"
      >
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div
            className={theme.underlay}
            aria-hidden="true"
            {...underlayProps}
          ></div>
          <FocusScope contain restoreFocus autoFocus>
            <motion.aside
              className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full sm:pl-10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.div
                className={classNames(
                  "pointer-events-auto relative w-screen",
                  theme.sizes[size]
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className={theme.closeButton.container}>
                  <button
                    {...closeButtonProps}
                    {...closeButtonHoverProps}
                    {...closeButtonFocusProps}
                    ref={closeButtonRef}
                    type="button"
                    className={classNames(
                      theme.closeButton.base,
                      isCloseButtonFocusVisible
                        ? theme.closeButton.states.focused
                        : "",
                      isCloseButtonHovered
                        ? theme.closeButton.states.hovered
                        : "",
                      !isCloseButtonFocusVisible && !isCloseButtonHovered
                        ? theme.closeButton.states.enabled
                        : ""
                    )}
                  >
                    <span className="sr-only">Close panel</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  className={theme.overlay}
                  {...overlayProps}
                  {...dialogProps}
                  {...modalProps}
                  ref={ref}
                >
                  {children}
                </div>
              </motion.div>
            </motion.aside>
          </FocusScope>
        </motion.div>
      </div>
    </OverlayContainer>
  );
};

SlideOver.displayName = "SlideOver";
