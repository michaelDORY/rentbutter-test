import { Typography } from '@/ui-kit/atoms';
import clsx from 'clsx';
import { FC, HTMLAttributes, ReactNode } from 'react';

type ConfirmationBlockProps = {
  icon?: ReactNode;
  title: string;
  text: string;
  withBiggerTitle?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const ConfirmationBlock: FC<ConfirmationBlockProps> = ({
  icon,
  title,
  text,
  withBiggerTitle = false,
  className,
}) => {
  return (
    <div className={clsx('flex flex-col items-center gap-2', className)}>
      {icon}
      <Typography
        variant="h3"
        className={clsx({ '!text-[18px] !leading-[28px]': withBiggerTitle })}
        align="center"
      >
        {title}
      </Typography>
      <Typography variant="small" align="center">
        {text}
      </Typography>
    </div>
  );
};
