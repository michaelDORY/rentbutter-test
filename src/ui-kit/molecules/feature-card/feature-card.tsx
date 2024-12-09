import clsx from 'clsx';
import { Icon, Typography } from '@/ui-kit/atoms';
import { FC } from 'react';
import { LucideIcon } from 'lucide-react';

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  hasTopBorder?: boolean;
}

export const FeatureCard: FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  hasTopBorder,
}) => {
  return (
    <div
      className={clsx('flex items-start gap-4 px-4 py-5', {
        'border-t border-neutral-100': !!hasTopBorder,
      })}
    >
      <Icon icon={icon} className="text-primary-600" />
      <div>
        <Typography variant="h3" as="h2" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small">{description}</Typography>
      </div>
    </div>
  );
};
