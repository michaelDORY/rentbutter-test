import { FC } from 'react';

interface ProgressBarProps {
  maxValue: number;
  value: number;
}

export const ProgressBar: FC<ProgressBarProps> = ({ maxValue, value }) => {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-grey-50">
      <div
        className="h-full min-w-4 rounded-full bg-blue-primary"
        style={{ width: `${(value / maxValue) * 100}%` }}
      />
    </div>
  );
};
