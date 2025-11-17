import React from 'react';
import { cn } from '@/lib/utils';

type AnimatedTextProps = {
  text: string;
  el?: keyof React.JSX.IntrinsicElements;
  className?: string;
};

const AnimatedText = React.forwardRef<
  HTMLElement,
  AnimatedTextProps
>(({ text, el: Wrapper = 'p', className }, ref) => {
  return (
    <Wrapper ref={ref as any} className={cn('font-headline', className)}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="char inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Wrapper>
  );
});

AnimatedText.displayName = "AnimatedText";

export { AnimatedText };
