import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/ui-kit';

const PrivacyPolicy: FC = () => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <Layout isOpen onClose={() => {}} showBackButton onNavigate={navigateBack}>
      <div className="flex h-screen">
        <h1 className="flex h-full items-center justify-center text-2xl font-bold">
          PrivacyPolicy
        </h1>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
