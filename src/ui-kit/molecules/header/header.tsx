import { FC } from 'react';
import { X, ChevronLeft } from 'lucide-react';
import { Stepper } from '@/ui-kit/atoms/stepper/stepper';
import { Button } from '@/ui-kit/atoms';
import clsx from 'clsx';

interface HeaderProps {
  showBackButton?: boolean;
  showStepper?: boolean;
  onNavigate?: () => void;
  onClose: () => void;
}

export const Header: FC<HeaderProps> = ({
  showBackButton,
  showStepper,
  onNavigate,
  onClose,
}) => (
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
        onClick={onNavigate}
      >
        <ChevronLeft className="h-5 w-5 text-primary" />
      </Button>
    )}

    {showStepper && <Stepper steps={3} activeStep={1} />}

    <Button variant={'icon'} aria-label="Close" size={'sm'} onClick={onClose}>
      <X className="h-5 w-5 text-primary" />
    </Button>
  </div>
);
