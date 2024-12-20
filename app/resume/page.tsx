'use client';

import { FC, useState } from 'react';
import { TextInput, Typography, Button } from '@/ui-kit';
import { useRouter } from 'next/navigation';
import { RoutesEnum } from '@/enums';

const Resume: FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSendMyLink = () => {
    router.push(RoutesEnum.RESUME_SUCCESS);
  };

  const handleStartNewVerification = () => {
    router.push(RoutesEnum.WELCOME);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setEmail('test.test.@gmail.com');
  };

  const handleBlur = () => {
    if (!email.length) {
      setIsFocused(false);
    }
  };

  return (
    <div className="base-content-container">
      <Typography variant="h2" as="h1">
        Welcome back!
      </Typography>
      <Typography className="mt-2">
        Finish your verification process where you left off by entering your
        email address.
      </Typography>

      <form className="flex flex-col gap-[12px] pt-[30px]">
        <TextInput
          label="Email Address"
          placeholder="Text input"
          inputClassName="bg-white"
          value={email}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <Button
            type="button"
            onClick={handleSendMyLink}
            variant={'alternative'}
            fullWidth
            disabled={!isFocused}
          >
            Send my link
          </Button>
          <Button
            type="button"
            onClick={handleStartNewVerification}
            variant={'ghostUnderline'}
            fullWidth
          >
            Start new verification
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Resume;
