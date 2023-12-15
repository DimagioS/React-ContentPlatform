import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const storeDecorator = (state: DeepPartial<StateSchema>) => (Story: Story) => (
  <StoreProvider initialState={state}>
    <Story />
  </StoreProvider>
);
