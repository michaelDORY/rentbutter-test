import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

const buttonVariants = cva(['focus:outline-none focus:outline-offset-0'], {
  variants: {
    variant: {
      primary: [
        'rounded-[4px] bg-blue-500 text-ink-700',
        'hover:bg-blue-200',
        'focus:outline-1 focus:outline-blue-500 ',
        'disabled:bg-gray-100 disabled:text-gray-400',
      ],
      alternative: [
        'rounded-[4px] bg-ink-700 text-gray-50',
        'hover:text-blue-500',
        'focus:text-blue-500',
        'disabled:bg-ink-200 disabled:text-gray-50',
      ],
      secondary: [
        'rounded-[4px] border-1.5 border-ink-700 text-ink-700',
        'hover:text-blue-500',
        'focus:text-blue-500 focus:bg-blue-100 focus:border-blue-500 focus:text-ink-700',
        'disabled:bg-gray-50 disabled:border-gray-400 disabled:text-gray-400',
      ],
      ghostUnderline: [
        'rounded-[4px] text-ink-700 underline',
        'hover:text-blue-700',
        'focus:text-ink-700',
        'disabled:text-gray-400',
      ],

      icon: ['rounded-full p-1.5 hover:bg-primary/5'],
    },
    size: {
      default: 'py-2.5 px-4 text-[14px] font-semibold',
      sm: 'py-1.5 px-1.5 text-sm',
      lg: 'py-4 px-5 text-lg font-semibold',
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
});

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
