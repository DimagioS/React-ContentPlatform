import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { DynamicModuleLoader } from 'shared/lib/components';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';
import { getCommentsIsLoading } from '../../model/selectors/comments';
import { articleDetailsCommentReducer, getArticleComments } from '../../model/slice/ArticleDetailsCommentSlice';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article-details');
  const { id } = useParams<{id: string}>();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getCommentsIsLoading);
  const dispatch = useAppDispatch();

  useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

  if (!id) {
    return (
      <div className={classNames('', {}, [className])}>
        <div>{t('Статья не найдена')}</div>
      </div>
    );
  }

  const initialReducers: ReducersList = {
    articleDetailsComment: articleDetailsCommentReducer,
  };

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text title={t('Комментарии')} className={styles.commentTitle} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </div>
    </DynamicModuleLoader>
  );
});

export default ArticleDetailsPage;
