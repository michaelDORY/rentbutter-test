import { X } from 'lucide-react';
import { FC, ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="modal-bg relative w-full max-w-[360px] rounded-2xl p-6 pt-[3.75rem] shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-3 top-4 rounded-full p-1.5 hover:bg-primary/5"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-primary" />
        </button>

        {title && <h2 className="mb-4 text-2xl font-bold">{title}</h2>}

        {children}
      </div>
    </div>
  );
};
