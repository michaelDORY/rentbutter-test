import { FC } from 'react';
import Image from 'next/image';
import { Typography } from '@/ui-kit/atoms';
import emblemIcon from '@/assets/icons/emblem.svg';

export const Footer: FC = () => {
  return (
    <div className="absolute bottom-0 left-0 flex w-full justify-center gap-2 border-t border-t-grey-100 py-3 text-primary">
      <Image src={emblemIcon} alt="emblem" />
      <Typography variant="small" align="center" className="text-primary">
        Powered by RentButter
      </Typography>
    </div>
  );
};
