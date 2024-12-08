import { FC } from 'react';
import { Button, FeatureCard, Icon, Modal, Typography } from '@/ui-kit';
import { Home, Shield, Zap } from 'lucide-react';

export const WelcomeModal: FC = () => {
  return (
    <Modal isOpen onClose={() => {}}>
      <div className="space-y-6">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon icon={Home} />
            <Typography variant="body" className="font-medium">
              rentbutter
            </Typography>
          </div>
          <Button variant="link" size="sm">
            Close
          </Button>
        </header>

        <div className="space-y-4">
          <Typography variant="h1">Welcome!</Typography>
          <Typography>
            You&apos;ve been invited to verify the details on your application.
            Get started now!
          </Typography>
        </div>

        <div className="space-y-6">
          <FeatureCard
            icon={Shield}
            title="Encrypted & Secure"
            description="We encrypt your personal data and your credentials will remain private."
          />
          <FeatureCard
            icon={Zap}
            title="Convenient & Fast"
            description="Complete your application in under 10 minutes and get approved faster."
          />
        </div>

        <div className="space-y-4">
          <Button fullWidth>Start Verification</Button>
          <Button variant="link" fullWidth>
            Resume existing application
          </Button>
        </div>

        <Typography variant="small" align="center">
          By proceeding you agree to our{' '}
          <a href="#" className="text-primary hover:underline">
            Privacy Policy
          </a>
        </Typography>
      </div>
    </Modal>
  );
};
