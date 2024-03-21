import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Comment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
  'comment/fetchCommentsByArticleId',
  async (articleId, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    if (!articleId) {
      return rejectWithValue('error');
    }

    try {
      const response = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue('error');
    }
  },
);
