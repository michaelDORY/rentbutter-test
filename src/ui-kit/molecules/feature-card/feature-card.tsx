import { FC } from 'react';
import { LucideIcon } from 'lucide-react';
import { Icon, Typography } from '@/ui-kit/atoms';

export const FeatureCard: FC<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="flex items-center gap-4">
      <Icon icon={icon} />
      <div>
        <Typography variant="h3" as="h2" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small">{description}</Typography>
      </div>
    </div>
  );
};
