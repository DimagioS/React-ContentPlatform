import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'shared/ui/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const {
    className,
    isOpen,
    onClose,
  } = props;

  return (
    <div className={classNames('', {}, [className])}>
      <Modal isOpen={isOpen} onClose={onClose} lazy>
        <Suspense fallback={<Loader />}>
          <LoginFormAsync onSuccess={onClose} />
        </Suspense>
      </Modal>
    </div>
  );
};
