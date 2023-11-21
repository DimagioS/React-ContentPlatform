import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(styles.navbar, {}, [className])}>
    <div className={styles.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={styles.mainLink}>
        Главная
      </AppLink>
      <AppLink theme={AppLinkTheme.RED} to="/about">
        О сайте
      </AppLink>
    </div>
  </div>
);
