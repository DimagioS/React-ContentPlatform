export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export { ArticleList } from './ui/ArticleList/ArticleList';
export { ArticleListItem } from './ui/ArticleListItem/ArticleListItem';

export {
  articleDetailsActions, articleDetailsReducer,
} from './model/slice/articleDetailsSlice';

export type { Article } from './model/types/article';
export { ArticleView } from './model/types/article';
export type { ArticleSchema } from './model/types/articleDetailsSchema';

export {
  getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading,
} from './model/selectors/getArticleDetails';
