import { StateSchema } from 'app/providers/StoreProvider';
import { getCommentFormError, getCommentFormText } from './getCommentFormSelectors';

describe('getCommentFormSelectors', () => {
  test('should return text value', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: 'text',
      },
    };

    expect(getCommentFormText(state as StateSchema)).toBe('text');
  });

  test('should work with empty state text', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getCommentFormText(state as StateSchema)).toBe('');
  });

  test('should return error value', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: 'error',
      },
    };

    expect(getCommentFormError(state as StateSchema)).toBe('error');
  });

  test('should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getCommentFormError(state as StateSchema)).toBe(undefined);
  });
});
