import { memo } from 'react';
import { AppLink } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const {
    path, text, theme = AppLinkTheme.PRIMARY, Icon,
  } = item;
  const { t } = useTranslation();

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
