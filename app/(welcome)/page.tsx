'use client';

import { FC } from 'react';
import { Button, SectionedItems, Typography } from '@/ui-kit';
import { Shield, Zap } from 'lucide-react';
import { RoutesEnum } from '@/enums';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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

const Welcome: FC = () => {
  const router = useRouter();
  const handleStartVerification = () => {
    router.push(RoutesEnum.CHECKLIST);
  };

  const handleResumeVerification = () => {
    router.push(RoutesEnum.RESUME);
  };

  return (
    <div className="base-content-container">
      <Typography variant="h2" as="h1">
        Welcome!
      </Typography>
      <Typography className="mt-2">
        You&apos;ve been invited to verify the details on your application. Get
        started now!
      </Typography>

      <SectionedItems
        className="mt-8"
        items={FEATURES.map(({ icon: Icon, title, description }) => (
          <>
            <Icon className="text-primary-600" />
            <div>
              <Typography variant="h3" as="h2" className="mb-1">
                {title}
              </Typography>
              <Typography variant="small">{description}</Typography>
            </div>
          </>
        ))}
      />

      <Typography
        variant="small"
        align="center"
        className="mt-[22px] text-primary"
      >
        By proceeding you agree to <br /> our{' '}
        <Link
          href={RoutesEnum.PRIVACY_POLICY}
          className="font-bold text-primary-600 underline"
        >
          Privacy Policy
        </Link>
      </Typography>

      <div className="mb-[42px]  mt-14 space-y-1">
        <Button
          onClick={handleStartVerification}
          variant={'alternative'}
          fullWidth
        >
          Start Verification
        </Button>
        <Button
          onClick={handleResumeVerification}
          variant="ghostUnderline"
          fullWidth
        >
          Resume existing application
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
