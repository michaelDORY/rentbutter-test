import { ElementType, FC, HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-3xl font-bold text-black tracking-[-0.02em] leading-[1.32em]',
      h2: 'text-2xl font-semibold text-black tracking-[-0.02em] leading-[1.32em]',
      h3: 'text-[12px] font-semibold text-black tracking-[0.005em] leading-[1.36em]',
      body: 'text-[14px] font-[430] tracking-[0.005em] leading-[1.42em]',
      small: 'text-[12px] text-grey-500 tracking-[0.005em] leading-[1.36em]',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    family: {
      kumbh: 'font-kumbh',
    },
  },
  defaultVariants: {
    variant: 'body',
    align: 'left',
    family: 'kumbh',
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
  family,
  as: Component = 'p',
  className,
  ...props
}) => {
  return (
    <Component
      className={typographyVariants({ variant, align, family, className })}
      {...props}
    >
      {children}
    </Component>
  );
};
