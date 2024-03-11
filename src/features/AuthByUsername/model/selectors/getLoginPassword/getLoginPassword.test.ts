import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginStatePassword', () => {
  test('should return password value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { password: 'Barcelona28' },
    };

    expect(getLoginPassword(state as StateSchema)).toEqual('Barcelona28');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
