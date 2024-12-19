import { FC, HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

const iconColors = ['primary', 'secondary', 'neutral'] as const;
type IconColor = (typeof iconColors)[number];

const iconVariants = cva('flex-shrink-0', {
  variants: {
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      neutral: 'text-grey-500',
    },
    size: {
      default: 'w-6 h-6',
      sm: 'w-4 h-4',
      lg: 'w-8 h-8',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'default',
  },
});

interface IconProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconVariants> {
  icon: LucideIcon;
  color?: IconColor;
}

export const Icon: FC<IconProps> = ({
  icon: Icon,
  color,
  size,
  className,
  ...props
}) => {
  return (
    <div className={iconVariants({ color, size, className })} {...props}>
      <Icon className={clsx('h-full w-full', className)} />
    </div>
  );
};
