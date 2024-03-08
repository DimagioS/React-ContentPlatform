import { Profile, ValidateProfileErrors } from '../../types/ProfileSchema';

export const validateProfileData = (profile?: Profile) => {
  if (profile == null) {
    return [ValidateProfileErrors.NO_DATA];
  }

  const errors: ValidateProfileErrors[] = [];
  const { age, lastname, first } = profile;

  if (!first || !lastname) {
    errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileErrors.INCORRECT_AGE);
  }

  return errors;
};
