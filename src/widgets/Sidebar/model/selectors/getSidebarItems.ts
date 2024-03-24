import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainPageIcon from 'shared/assets/icons/main-20-20.svg';
import AboutPageIcon from 'shared/assets/icons/about-20-20.svg';
import ProfilePageIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticlesPageIcon from 'shared/assets/icons/article-page-20-20.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
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
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData.id,
          text: 'Профиль',
          Icon: ProfilePageIcon,
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          text: 'Статьи',
          Icon: ArticlesPageIcon,
          authOnly: true,
        },
      );
    }

    return sidebarItemsList;
  },
);
