import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className, as: Tag = 'section', ...props }, ref) => {
    return (
      <Tag
        ref={ref as any}
        className={cn('w-full py-24 lg:py-32', className)}
        {...props}
      >
        <div className="container mx-auto px-4 md:px-6">{children}</div>
      </Tag>
    );
  }
);
Section.displayName = 'Section';

export { Section };
