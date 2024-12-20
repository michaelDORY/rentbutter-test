import React from 'react';
import { Header } from '@/ui-kit';

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="base-header-container">
        <Header showBackButton />
      </div>
      {children}
    </>
  );
}
