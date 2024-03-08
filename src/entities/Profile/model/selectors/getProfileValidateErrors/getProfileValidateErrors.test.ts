import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileErrors } from '../../types/ProfileSchema';

describe('getProfileValidateErrors', () => {
  test('should return errors', () => {
    const errors = [
      ValidateProfileErrors.SERVER_ERROR,
      ValidateProfileErrors.NO_DATA,
    ];

    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors,
      },
    };

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([]);
  });
});
