import { lazy } from 'react';

export const LoginFormAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // test
  setTimeout(() => resolve(import('./LoginForm')), 1500);
}));
