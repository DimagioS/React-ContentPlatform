import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/ui/Button';
import styles from './PageError.module.scss';

interface pageErrorProps {
  className?: string;
}

export const PageError = ({ className }: pageErrorProps) => {
  const { t } = useTranslation();

  function reloadPage() {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }

  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      <Button onClick={reloadPage} type="button">{t('Обновить страницу')}</Button>
      <h1>{t('Что-то пошло не так')}</h1>
    </div>
  );
};
