import { Cuontry } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile, ProfileSchema, ValidateProfileErrors } from '../types/ProfileSchema';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data: Profile = {
  first: 'qwerty',
  lastname: 'qwerty',
  age: 10,
  city: 'Moscow',
  country: Cuontry.Russia,
  currency: Currency.RUB,
  username: 'qwerty',
  avatar: 'skfjfskjl',
};

describe('LoginSlice', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };

    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: { ...data, first: '', lastname: '' },
      readonly: false,
      validateErrors: [ValidateProfileErrors.SERVER_ERROR],
    };

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      data,
      form: data,
      readonly: true,
      validateErrors: undefined,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: data,
    };

    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ age: 20 }))).toEqual({
      form: { ...data, age: 20 },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileErrors.SERVER_ERROR],
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fulfilleld', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      readonly: false,
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
      isLoading: false,
      readonly: true,
      data,
      form: data,
    });
  });
});
