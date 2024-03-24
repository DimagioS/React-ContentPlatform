import { FC, lazy } from 'react';
import { CommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<CommentFormProps>>(() => new Promise((resolve) => {
  // @ts-ignore
  // test
  setTimeout(() => resolve(import('./AddCommentForm')), 1500);
}));
