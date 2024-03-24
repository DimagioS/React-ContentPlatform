import { createReduxStore, AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';
import type {
  StateSchema, ReduxStoreWithManager, ThunkExtraArg, ReducersList, StateSchemaKeys, ThunkConfig,
} from './config/StateSchema';

export {
  createReduxStore,
  StoreProvider,
  StateSchema,
  ReduxStoreWithManager,
  AppDispatch,
  ThunkExtraArg,
  StateSchemaKeys,
  ReducersList,
  ThunkConfig,
};
