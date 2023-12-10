import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import Input from 'shared/ui/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <div className={styles.inputs}>
        <Input
          type="text"
          placeholder={`${t('Имя пользователя')}>`}
          autofocus
        />
        <Input
          type="text"
          placeholder={`${t('Пароль')}>`}
        />
      </div>
      <Button>
        {t('Войти')}
      </Button>
    </div>
  );
};
