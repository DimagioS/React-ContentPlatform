import { Cuontry } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { Profile, ValidateProfileErrors } from '../../types/ProfileSchema';

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

describe('validateProfileData', () => {
  test('success', async () => {
    expect(validateProfileData(data)).toEqual([]);
  });

  test('without first and lastname', async () => {
    expect(validateProfileData({ ...data, first: '', lastname: '' })).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
  });

  test('incorrec age', async () => {
    expect(validateProfileData({ ...data, age: undefined })).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
  });

  test('incorrect all', async () => {
    expect(validateProfileData({})).toEqual(
      [ValidateProfileErrors.INCORRECT_USER_DATA,
        ValidateProfileErrors.INCORRECT_AGE,
      ],
    );
  });

  test('no data', async () => {
    expect(validateProfileData(undefined)).toEqual([ValidateProfileErrors.NO_DATA]);
  });
});
