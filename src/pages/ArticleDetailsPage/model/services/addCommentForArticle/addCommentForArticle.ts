import { createAsyncThunk } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (text, thunkApi) => {
    const {
      rejectWithValue, dispatch, extra, getState,
    } = thunkApi;

    const user = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!user || !text || !article) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        text,
        articleId: article?.id,
        userId: user?.id,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(article?.id));

      return response.data;
    } catch (err) {
      return rejectWithValue('error');
    }
  },
);
