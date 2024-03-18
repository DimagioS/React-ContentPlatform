import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Article } from '../types/article';
import { fetchArticleById } from '../services/fetchArticleById';
import { ArticleSchema } from '../types/articleDetailsSchema';

const initialState: ArticleSchema = {
  data: undefined,
  error: undefined,
  isLoading: false,
};

export const articleDetailsSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
