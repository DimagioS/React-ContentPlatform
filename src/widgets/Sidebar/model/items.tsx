import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import MainPageIcon from 'shared/assets/icons/main-20-20.svg';
import AboutPageIcon from 'shared/assets/icons/about-20-20.svg';
import ProfilePageIcon from 'shared/assets/icons/profile-20-20.svg';

export type SidebarItemType = {
  path: string,
  text: string,
  theme?: AppLinkTheme,
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>,
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Главнaя',
    Icon: MainPageIcon,
  },
  {
    path: RoutePath.about,
    text: 'О сайте',
    Icon: AboutPageIcon,
  },
  {
    path: RoutePath.profile,
    text: 'Профиль',
    Icon: ProfilePageIcon,
    authOnly: true,
  },
];
