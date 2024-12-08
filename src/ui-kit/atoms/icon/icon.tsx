import { FC, HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

const iconColors = ['primary', 'secondary', 'neutral'] as const;
type IconColor = (typeof iconColors)[number];

const iconVariants = cva('flex-shrink-0 rounded-full p-2', {
  variants: {
    color: {
      primary: 'bg-primary/10',
      secondary: 'bg-secondary/10',
      neutral: 'bg-neutral-100',
    },
    size: {
      default: 'w-10 h-10',
      sm: 'w-8 h-8',
      lg: 'w-12 h-12',
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
      <Icon
        className={clsx(
          color === 'primary' && 'text-primary',
          color === 'secondary' && 'text-secondary',
          color === 'neutral' && 'text-neutral-500',
          'h-full w-full',
        )}
      />
    </div>
  );
};
