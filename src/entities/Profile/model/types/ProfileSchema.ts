import { Cuountry, Currency } from 'shared/const/common';

export interface Profile {
  first: string,
  lastname: string,
  age: string,
  currency: Currency,
  country: Cuountry,
  city: string,
  username: string,
  avatar: string
}

export interface ProfileSchema {
  data?: Profile,
  isLoading: boolean,
  error?: string,
  readonly: boolean
}
