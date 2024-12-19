import { FC } from 'react';
import { Layout } from '@/ui-kit';
import { useNavigate } from 'react-router-dom';

const Resume: FC = () => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <Layout isOpen onClose={() => {}} showBackButton onNavigate={navigateBack}>
      <div className="flex h-screen">
        <h1 className="flex h-full items-center justify-center text-2xl font-bold">
          Resume
        </h1>
      </div>
    </Layout>
  );
};

export default Resume;
