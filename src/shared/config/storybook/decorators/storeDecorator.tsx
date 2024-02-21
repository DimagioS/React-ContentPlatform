import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername';

const defaultAsyncReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
};

export const storeDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (Story: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducer, ...asyncReducers }}>
    <Story />
  </StoreProvider>
);