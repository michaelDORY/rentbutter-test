'use client';

import { FC, useState } from 'react';
import {
  Button,
  Icon,
  ProgressTracker,
  SectionedItems,
  Typography,
} from '@/ui-kit';
import clsx from 'clsx';
import { Check } from 'lucide-react';

const CHECKLIST = [
  {
    title: 'ID & Background Verification',
    description:
      'Snap a photo of your ID document and provide additional background info.',
  },
  {
    title: 'Income Verification',
    description:
      'Link your bank account, sign in to your payroll provider, or upload documents.',
  },
  {
    title: 'Housing Verification',
    description:
      'Link your bank account or upload documents to confirm rent payments.',
  },
];

const Checklist: FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleVerifyIdentity = () => {
    setActiveStep((prev) => prev + 1);
  };

  const mapChecklistItems = CHECKLIST.map(({ title, description }, index) => {
    const isResolved = index + 1 < activeStep;
    const isNotResolved = index + 1 > activeStep;
    return (
      <div className="flex gap-4" key={index}>
        <div
          className={clsx(
            'flex size-4 flex-shrink-0 items-center justify-center rounded-full border',
            {
              'border-blue-primary bg-blue-primary': isResolved,
              'border-blue-primary bg-white': activeStep === index + 1,
              'border-grey-200 bg-white': isNotResolved,
            },
          )}
        >
          {isResolved && (
            <Icon
              icon={Check}
              className="stroke-[3px] text-blue-100"
              size="xs"
            />
          )}
        </div>
        <div>
          <Typography
            variant="h4"
            className={clsx({ '!text-grey-400': isNotResolved })}
          >
            {title}
          </Typography>
          <Typography
            variant="small"
            className={clsx('mt-1', {
              '!text-grey-400': isNotResolved,
            })}
          >
            {description}
          </Typography>
        </div>
      </div>
    );
  });

  return (
    <main className="base-content-container !py-0">
      <Typography variant="h2">Checklist</Typography>
      <Typography className="mt-2">
        Complete the checklist below to verify the details of your application.
      </Typography>
      <ProgressTracker className="mt-8" value={activeStep - 1} maxValue={3} />
      <SectionedItems
        className="mt-2"
        items={mapChecklistItems}
        itemsClassName={CHECKLIST.map((_, index) =>
          index + 1 > activeStep ? 'bg-grey-25' : 'bg-white',
        )}
      />
      <Button
        className="mt-3"
        onClick={handleVerifyIdentity}
        fullWidth
        variant={'alternative'}
      >
        Verify identity
      </Button>
    </main>
  );
};

export default Checklist;
