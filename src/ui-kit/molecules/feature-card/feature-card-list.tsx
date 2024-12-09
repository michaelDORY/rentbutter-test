import { FC } from 'react';
import { Typography } from '@/ui-kit/atoms';
import clsx from 'clsx';

export const FeatureCardList: FC<{
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  className?: string;
}> = ({ features, className }) => {
  return (
    <div
      className={clsx(
        'rounded-[4px] border border-neutral-100 bg-white shadow-[0_2px_4px_0px_rgba(13,18,28,0.08)]',
        className,
      )}
    >
      {features.map(({ icon, title, description }, index) => (
        <div
          className={clsx('flex items-start gap-4 px-4 py-5', {
            'border-t border-neutral-100': index !== 0,
          })}
          key={index}
        >
          <img src={icon} />
          <div>
            <Typography variant="h3" as="h2" className="mb-1">
              {title}
            </Typography>
            <Typography variant="small">{description}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
};
