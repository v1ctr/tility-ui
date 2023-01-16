# @tility-ui/slide-over

A customizable react slide-over build with [React-Aria](https://github.com/adobe/react-spectrum), [Framer-Motion](https://github.com/framer/motion) and [Tailwind](https://tailwindcss.com).

This package is part of [tility-ui](https://github.com/v1ctr/tility-ui). See the repo for more details.

## Getting Started

```bash
npm install @tility-ui/slide-over
```

## Example

```jsx
import { SlideOver, AnimatePresence } from "@tility-ui/slide-over";
import { Button } from "@tility-ui/button";
import { ThemeProvider } from "@tility-ui/theme";

export const Demo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ThemeProvider>
      <Button onPress={() => setIsOpen(true)}>Open Slide-Over</Button>
      <AnimatePresence>
        {isOpen && (
          <SlideOver
            isDismissable
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          ></SlideOver>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
};
```

The `ThemeProvider` is essential for displaying the modal. It uses the `OverlayProvider` from [React-Aria](https://github.com/adobe/react-spectrum) to render the slide over in a React Portal at the end of the document body.
