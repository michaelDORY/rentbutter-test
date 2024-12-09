import { FC } from 'react';
import { Icon, Typography } from '@/ui-kit/atoms';
import clsx from 'clsx';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureCardListProps {
  features: Feature[];
  className?: string;
}

export const FeatureCardList: FC<FeatureCardListProps> = ({
  features,
  className,
}) => {
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
          <Icon icon={icon} className="text-primary-600" />
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
