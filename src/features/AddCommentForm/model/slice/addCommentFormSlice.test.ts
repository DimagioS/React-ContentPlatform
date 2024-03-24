import { AddCommentFormSchema } from '../types/AddCommentFormSchema';
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

describe('addCommentFormSlice', () => {
  test('test set text', () => {
    const state: DeepPartial<AddCommentFormSchema> = { text: 'text' };

    expect(addCommentFormReducer(state as AddCommentFormSchema, addCommentFormActions.setText('next'))).toEqual({ text: 'next' });
  });
});
