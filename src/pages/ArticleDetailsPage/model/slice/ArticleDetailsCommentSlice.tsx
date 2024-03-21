import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleDetailsCommentSchema } from '../types/ArticleDetailsCommentSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComment || commentsAdapter.getInitialState(),
);

const articleDetailsCommentSlice = createSlice({
  name: 'articleDetailsCommentSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },

});

// Action creators are generated for each case reducer function
export const { actions: articleDetailsCommentActions } = articleDetailsCommentSlice;
export const { reducer: articleDetailsCommentReducer } = articleDetailsCommentSlice;
