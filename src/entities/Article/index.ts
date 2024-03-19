export {
  ArticleDetails,
} from './ui/ArticleDetails/ArticleDetails';

export {
  articleDetailsActions, articleDetailsReducer,
} from './model/slice/articleDetailsSlice';

export type { Article } from './model/types/article';
export type { ArticleSchema } from './model/types/articleDetailsSchema';

export {
  getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading,
} from './model/selectors/getArticleDetails';
