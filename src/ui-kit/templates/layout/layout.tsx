import { FC, ReactNode } from 'react';
import { Header } from '../../molecules/header/header';
import { Footer } from '../../molecules/footer/footer';

interface LayoutProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: () => void;
  showBackButton?: boolean;
  showStepper?: boolean;
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({
  isOpen,
  onClose,
  onNavigate,
  showBackButton,
  showStepper,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="modal-bg relative h-full max-h-[620px] w-full max-w-[360px] rounded-2xl p-2.5 shadow-xl">
        <Header
          showBackButton={showBackButton}
          showStepper={showStepper}
          onNavigate={onNavigate}
          onClose={onClose}
        />

        <div className="p-2.5">{children}</div>

        <Footer />
      </div>
    </div>
  );
};
