import { ElementType, FC, HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-3xl font-bold text-neutral-700 tracking-[-0.02em] leading-[1.32em]',
      h2: 'text-2xl font-semibold text-neutral-700 tracking-[-0.02em] leading-[1.32em]',
      h3: 'text-[12px] font-semibold text-neutral-700 tracking-[0.005em] leading-[1.36em]',
      body: 'text-[14px] tracking-[0.005em] leading-[1.42em]',
      small: 'text-[12px] text-neutral-600 tracking-[0.005em] leading-[1.36em]',
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
