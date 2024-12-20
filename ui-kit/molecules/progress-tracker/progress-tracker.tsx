import { ProgressBar, Typography } from '@/ui-kit/atoms';
import clsx from 'clsx';
import { FC } from 'react';

type ProgressTrackerProps = typeof ProgressBar.prototype;

export const ProgressTracker: FC<ProgressTrackerProps> = ({
  maxValue,
  value,
  className,
}) => {
  return (
    <div
      className={clsx('border border-grey-100 bg-white px-4 py-3', className)}
    >
      <div className="mb-2 flex items-end justify-between">
        <Typography variant="h4">Current progress</Typography>
        <Typography variant="small" className="!text-grey-500">
          {value} of {maxValue} completed
        </Typography>
      </div>
      <ProgressBar maxValue={maxValue} value={value} />
    </div>
  );
};
