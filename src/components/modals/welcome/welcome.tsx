import { FC } from 'react';
import { Button, Modal, Typography } from '@/ui-kit';
import { Shield, Zap } from 'lucide-react';
import emblemIcon from '@/assets/icons/emblem.svg';
import clsx from 'clsx';
import { FeatureCard } from '@/ui-kit/molecules/feature-card/feature-card.tsx';

const FEATURES = [
  {
    icon: Shield,
    title: 'Encrypted & Secure',
    description:
      'We encrypt your personal data and your credentials will remain private.',
  },
  {
    icon: Zap,
    title: 'Convenient & Fast',
    description:
      'Complete your application in under 10 minutes and get approved faster.',
  },
];

export const WelcomeModal: FC = () => {
  return (
    <Modal isOpen onClose={() => {}}>
      <Typography variant="h2" as="h1">
        Welcome!
      </Typography>
      <Typography className="mt-2">
        You&apos;ve been invited to verify the details on your application. Get
        started now!
      </Typography>

      <div
        className={clsx(
          'mt-8 rounded-[4px] border border-neutral-100 bg-white shadow-[0_2px_4px_0px_rgba(13,18,28,0.08)]',
        )}
      >
        {FEATURES.map((featureProps, index) => (
          <FeatureCard
            key={index}
            {...featureProps}
            hasTopBorder={index !== 0}
          />
        ))}
      </div>

      <Typography
        variant="small"
        align="center"
        className="mt-[22px] text-primary"
      >
        By proceeding you agree to <br /> our{' '}
        <a href="#" className="font-bold text-primary-600 underline">
          Privacy Policy
        </a>
      </Typography>

      <div className="mb-[42px]  mt-14 space-y-1">
        <Button fullWidth>Start Verification</Button>
        <Button variant="link" fullWidth>
          Resume existing application
        </Button>
      </div>

      <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-2 py-3 text-primary">
        <img src={emblemIcon} alt="emblem" />
        <Typography variant="small" align="center" className="text-primary">
          Powered by RentButter
        </Typography>
      </div>
    </Modal>
  );
};
