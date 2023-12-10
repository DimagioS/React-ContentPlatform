import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'shared/ui/Modal';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props;

  return (
    <div className={classNames('', {}, [className])}>
      <Modal isOpen={isOpen} onClose={onClose} lazy>
        {children}
      </Modal>
    </div>
  );
};
