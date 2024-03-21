export {
  ArticleDetailsPageAsync as ArticleDetailsPage,
} from './ui/ArticleDetailsPage/ArticleDetailsPage.async';

export {
  articleDetailsCommentReducer, getArticleComments, articleDetailsCommentActions,
} from './model/slice/ArticleDetailsCommentSlice';

export type { ArticleDetailsCommentSchema } from './model/types/ArticleDetailsCommentSchema';
