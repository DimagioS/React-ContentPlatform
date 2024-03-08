import { StateSchema } from 'app/providers/StoreProvider';
import { Cuontry } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('should return form data', () => {
    const form = {
      first: 'qwerty',
      lastname: 'qwerty',
      age: 10,
      city: 'Moscow',
      country: Cuontry.Russia,
      currency: Currency.RUB,
      username: 'qwerty',
      avatar: 'skfjfskjl',
    };

    const state: DeepPartial<StateSchema> = {
      profile: { form },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
