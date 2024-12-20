import React from 'react';
import { Header } from '@/ui-kit';

export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="base-header-container">
        <Header />
      </div>
      {children}
    </>
  );
}
