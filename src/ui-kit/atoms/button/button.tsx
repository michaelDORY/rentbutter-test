import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

const buttonVariants = cva(
  [' transition-all duration-200 ease-in-out', 'focus:outline-none '],
  {
    variants: {
      variant: {
        primary: [
          'rounded-lg bg-primary text-white hover:bg-primary/90',
          'hover:shadow-sm focus:ring-2 focus:ring-offset-2',
        ],
        outline: [
          'rounded-lg border border-primary text-primary hover:bg-primary/10 hover:shadow-sm focus:ring-2 focus:ring-offset-2',
        ],
        link: ['text-primary hover:underline bg-transparent '],
      },
      size: {
        default: 'py-3 px-4 text-base',
        sm: 'py-2 px-3 text-sm',
        lg: 'py-4 px-5 text-lg',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      fullWidth: false,
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant,
  size,
  fullWidth,

  className,
  ...props
}) => {
  return (
    <button
      className={buttonVariants({ variant, size, fullWidth, className })}
      {...props}
    >
      {children}
    </button>
  );
};
