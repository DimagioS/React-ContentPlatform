import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={styles.mainLink}>
          {t('Главнaя')}
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to="/about">
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
};
