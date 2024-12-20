'use client';

import { RoutesEnum } from '@/enums';
import { Button, ConfirmationBlock } from '@/ui-kit';
import { DoorOpen } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const Exit = () => {
  const router = useRouter();

  return (
    <div className="base-content-container flex h-full flex-col">
      <ConfirmationBlock
        withBiggerTitle
        className="flex-1 justify-center"
        icon={<DoorOpen className="size-12 text-blue-500" />}
        title="Leave verification?"
        text="Your verification progress will be lost and you’ll need to start from the beginning."
      />
      <div className="mb-[70px] space-y-1">
        <Button onClick={() => router.back()} variant={'alternative'} fullWidth>
          Continue verification
        </Button>
        <Button
          onClick={() => router.push(RoutesEnum.WELCOME)}
          variant="ghostUnderline"
          fullWidth
        >
          Yes, exit verification
        </Button>
      </div>
    </div>
  );
};

export default Exit;
