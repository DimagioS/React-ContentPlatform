import { ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { ReducersList, StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article';
import { profileReducer } from 'entities/Profile';
import { addCommentFormReducer } from 'features/AddCommentForm';
import { loginReducer } from 'features/AuthByUsername';
import { articleDetailsCommentReducer } from 'pages/ArticleDetailsPage';

const defaultAsyncReducer: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsComment: articleDetailsCommentReducer,
  addCommentForm: addCommentFormReducer,
};

export const storeDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (Story: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducer, ...asyncReducers }}>
    <Story />
  </StoreProvider>
);
