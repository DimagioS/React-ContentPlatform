import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginStateUsername', () => {
  test('should return username value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: 'Messi' },
    };

    expect(getLoginUsername(state as StateSchema)).toEqual('Messi');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
