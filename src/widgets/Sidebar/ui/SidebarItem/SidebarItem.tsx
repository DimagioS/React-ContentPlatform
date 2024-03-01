import { memo } from 'react';
import { AppLink } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean,
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, collapsed } = props;
  const isAuth = useSelector(getUserAuthData);

  const {
    path, text, theme = AppLinkTheme.PRIMARY, Icon, authOnly,
  } = item;
  const { t } = useTranslation();

  if (authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      theme={theme}
      to={path}
      className={classNames(styles.linkItem, { [styles.collapsed]: collapsed }, [])}
    >
      <Icon />
      <span>{t(text)}</span>
    </AppLink>
  );
});
