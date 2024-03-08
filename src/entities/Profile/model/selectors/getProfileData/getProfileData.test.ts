import { StateSchema } from 'app/providers/StoreProvider';
import { Cuontry } from 'entities/Country';
import { Currency } from 'entities/Currency';
// import AvatarImg from 'shared/assets/test/storybook.jpg';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('should return data', () => {
    const data = {
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
      profile: { data },
    };

    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
