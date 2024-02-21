import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('LoginSlice', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'Mata' };

    expect(loginReducer(state as LoginSchema, loginActions.setUsername('Mladen'))).toEqual({ username: 'Mladen' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: 'qwerty' };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword('12345'))).toEqual({ password: '12345' });
  });
});
