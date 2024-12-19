import { FC } from 'react';
import { Layout, Button } from '@/ui-kit';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from '@/enums';

const Checklist: FC = () => {
  const navigate = useNavigate();

  const handleVerifyIdentity = () => {
    navigate(RoutesEnum.ID_VERIFICATION);
  };

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <Layout isOpen onClose={() => {}} showBackButton onNavigate={navigateBack}>
      <div>
        <h1 className="flex h-full text-2xl font-bold">Checklist</h1>
        <Button onClick={handleVerifyIdentity} variant={'alternative'}>
          Start Verification
        </Button>
      </div>
    </Layout>
  );
};

export default Checklist;
