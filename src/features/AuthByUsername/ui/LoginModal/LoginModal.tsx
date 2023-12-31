import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

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
        <LoginForm />
      </Modal>
    </div>
  );
};
