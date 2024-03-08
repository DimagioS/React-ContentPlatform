import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Profile, ValidateProfileErrors } from '../../types/ProfileSchema';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileErrors[]>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { rejectWithValue, extra, getState } = thunkApi;
    const formData = getProfileForm(getState());
    const validateProfile = validateProfileData(formData);

    if (validateProfile.length > 0) {
      return rejectWithValue(validateProfile);
    }

    try {
      const response = await extra.api.put<Profile>('/profile', formData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
    }
  },
);
