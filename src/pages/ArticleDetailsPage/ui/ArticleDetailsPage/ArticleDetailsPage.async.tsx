import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // test
  setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
}));
