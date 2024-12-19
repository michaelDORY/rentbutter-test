import { FC } from 'react';

import { Typography } from '@/ui-kit/atoms';
import emblemIcon from '@/assets/icons/emblem.svg';

export const Footer: FC = () => {
  return (
    <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-2 py-3 text-primary">
      <img src={emblemIcon} alt="emblem" />
      <Typography variant="small" align="center" className="text-primary">
        Powered by RentButter
      </Typography>
    </div>
  );
};
