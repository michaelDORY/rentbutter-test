import { FC } from 'react';
import { Button, FeatureCardList, Modal, Typography } from '@/ui-kit';
import shieldIcon from '@/assets/icons/shield-protected.svg';
import thunderIcon from '@/assets/icons/thunder-move.svg';
import emblemIcon from '@/assets/icons/emblem.svg';

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

      <FeatureCardList
        className="mt-8"
        features={[
          {
            icon: shieldIcon,
            title: 'Encrypted & Secure',
            description:
              'We encrypt your personal data and your credentials will remain private.',
          },
          {
            icon: thunderIcon,
            title: 'Convenient & Fast',
            description:
              'Complete your application in under 10 minutes and get approved faster.',
          },
        ]}
      />

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
