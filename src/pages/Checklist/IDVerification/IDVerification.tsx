import { Outlet, useNavigate } from 'react-router-dom';
import { Layout } from '@/ui-kit';
import { FC } from 'react';

const IDVerification: FC = () => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <Layout
      showBackButton
      showStepper
      isOpen
      onClose={() => {}}
      onNavigate={navigateBack}
    >
      <h1 className="flex h-full text-2xl font-bold">IDVerification</h1>

      <Outlet />
    </Layout>
  );
};

export default IDVerification;
