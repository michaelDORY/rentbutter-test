import { ElementType, FC, HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-3xl font-bold text-neutral-700',
      h2: 'text-2xl font-semibold text-neutral-700',
      h3: 'text-xl font-medium text-neutral-700',
      body: 'text-base text-neutral-600',
      small: 'text-sm text-neutral-500',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    variant: 'body',
    align: 'left',
  },
});

interface TypographyProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: ElementType;
}

export const Typography: FC<TypographyProps> = ({
  children,
  variant,
  align,
  as: Component = 'p',
  className,
  ...props
}) => {
  return (
    <Component
      className={typographyVariants({ variant, align, className })}
      {...props}
    >
      {children}
    </Component>
  );
};