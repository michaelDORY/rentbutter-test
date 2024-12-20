import React from 'react';
import { Header } from '@/ui-kit';

export default function VerificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header showBackButton showStepper />
      {children}
    </>
  );
}
