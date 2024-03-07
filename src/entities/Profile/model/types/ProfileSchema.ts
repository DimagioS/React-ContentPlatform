import { Cuontry } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum ValidateProfileErrors {
  INCORRECT_USER_DATA = 'INCORRECT_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  SERVER_ERROR = 'SERVER_ERROR',
  NO_DATA = 'NO_DATA',
}

export interface Profile {
  first?: string,
  lastname?: string,
  age?: number,
  currency?: Currency,
  country?: Cuontry,
  city?: string,
  username?: string,
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile,
  form?: Profile,
  isLoading: boolean,
  error?: string,
  readonly: boolean,
  validateErrors?: ValidateProfileErrors[]
}
