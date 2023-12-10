import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';

// Creates and returns a new instance of the Redux store.
// This allows for flexible configuration of the store's initial state and middleware,
// which is particularly useful for testing, server-side rendering, and integration
// with other parts of the application, such as Storybook.

export function createReduxStore(initialState: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
