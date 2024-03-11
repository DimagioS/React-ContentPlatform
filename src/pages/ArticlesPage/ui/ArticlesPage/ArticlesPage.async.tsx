import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // test
  setTimeout(() => resolve(import('./ArticlesPage')), 1500);
}));
