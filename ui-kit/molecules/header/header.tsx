'use client';

import { FC } from 'react';
import { X, ChevronLeft } from 'lucide-react';
import { Stepper } from '@/ui-kit/atoms/stepper/stepper';
import { Button } from '@/ui-kit/atoms';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  hideCloseButton?: boolean;
  showBackButton?: boolean;
  showStepper?: boolean;
  onClose?: () => void;
}

export const Header: FC<HeaderProps> = ({
  hideCloseButton,
  showBackButton,
  showStepper,
  onClose,
}) => {
  const router = useRouter();

  const handleNavigateBack = () => {
    router.back();
  };

  return (
    <div
      className={clsx('flex w-full items-center justify-end', {
        'justify-between': showBackButton,
      })}
    >
      {showBackButton && (
        <Button
          variant={'icon'}
          aria-label="Go back"
          size={'sm'}
          onClick={handleNavigateBack}
        >
          <ChevronLeft className="h-5 w-5 text-primary" />
        </Button>
      )}

      {showStepper && <Stepper steps={3} activeStep={1} />}

      {!hideCloseButton && (
        <Button
          variant={'icon'}
          aria-label="Close"
          size={'sm'}
          onClick={onClose}
        >
          <X className="h-5 w-5 text-primary" />
        </Button>
      )}
    </div>
  );
};
