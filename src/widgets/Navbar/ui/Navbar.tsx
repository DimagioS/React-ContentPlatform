import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import LoginModal from 'features/AuthByUsername/ui/LoginModal';
import LoginForm from 'features/AuthByUsername/ui/LoginForm';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
          {t('Войти')}
        </Button>
      </div>
      { /* eslint-disable-next-line i18next/no-literal-string */}
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal}>
        <LoginForm />
      </LoginModal>
    </div>
  );
};
