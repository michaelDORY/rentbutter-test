'use client';

import { FC, useState } from 'react';
import { ConfirmationBlock, Typography, Button } from '@/ui-kit';
import letter from '../../assets/images/letter.png';
import Image from 'next/image';

const ResumeSuccess: FC = () => {
  const [isResendLink, setIsResendLink] = useState(false);

  const handleClickResendLink = () => {
    setIsResendLink(true);
  };

  return (
    <div className="base-content-container flex h-full flex-col items-center justify-center">
      <ConfirmationBlock
        icon={<Image src={letter} alt="Letter" />}
        title="Check your email!"
        text="We sent  instructions to resume your existing verification process to your email address!."
      />

      <div className="mt-[40px] flex flex-col items-center">
        {!isResendLink ? (
          <>
            <Typography className="font-semibold" variant="body" align="center">
              Didn&apos;t receive an email?
            </Typography>
            <Button
              className="!p-0"
              fullWidth
              size={'xs'}
              variant={'ghostUnderline'}
              onClick={handleClickResendLink}
            >
              <span className="tracking-[0.075em]"> Resend Link</span>
            </Button>
          </>
        ) : (
          <Typography className="font-semibold" variant="body" align="center">
            You can send a new link in 5 minutes
          </Typography>
        )}
      </div>
    </div>
  );
};

export default ResumeSuccess;
