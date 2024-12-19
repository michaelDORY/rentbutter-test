import clsx from 'clsx';
import { Check } from 'lucide-react';
import { FC } from 'react';

interface StepperProps {
  steps: number;
  activeStep: number;
}

export const Stepper: FC<StepperProps> = ({ steps, activeStep }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: steps }, (_, index) => {
        const step = index + 1;
        return (
          <>
            <div
              className={clsx(
                //TODO: add satoshi font and use it here
                'flex size-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-[500] leading-none',
                step <= activeStep
                  ? 'border-ink-primary bg-ink-primary text-white'
                  : 'border-grey-200 text-grey-500',
              )}
            >
              {step < activeStep ? (
                <Check size={12} strokeWidth={3} className="text-blue-100" />
              ) : (
                step
              )}
            </div>
            {index !== steps - 1 && (
              <div
                className={clsx(
                  'mx-2.5 h-px w-4 shrink-0',
                  step < activeStep ? 'bg-ink-primary' : 'bg-grey-200',
                )}
              />
            )}
          </>
        );
      })}
    </div>
  );
};
