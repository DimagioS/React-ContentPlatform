import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import { DynamicModuleLoader } from 'shared/lib/components';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { Avatar } from 'shared/ui/Avatar';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { Icon } from 'shared/ui/Icon';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetails';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import styles from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string,
  id: string
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { id, className } = props;
  const { t } = useTranslation('article-details');

  const dispatch = useAppDispatch();
  const articleDetails = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);
  const isLoading = useSelector(getArticleDetailsIsLoading);

  const blockGenerator = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent key={block.id} block={block} className={styles.block} />;
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent key={block.id} block={block} className={styles.block} />;
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent key={block.id} block={block} className={styles.block} />;
    default:
      return null;
    }
  }, []);

  useInitialEffect(() => {
    dispatch(fetchArticleById(id));
  });

  const initialReducers: ReducersList = {
    articleDetails: articleDetailsReducer,
  };

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={styles.avatar} width={200} height={200} border="50%" />
        <Skeleton className={styles.title} width={300} height={32} />
        <Skeleton className={styles.skeleton} width={600} height={24} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
        title={t('Произошла ошибка при загрузку статьи')}
      />
    );
  } else {
    content = (
      <>
        <div className={styles.avatarWrapper}>
          <Avatar
            size={200}
            src={articleDetails?.img}
            className={styles.avatar}
          />
        </div>
        <Text
          className={styles.title}
          title={articleDetails?.title}
          text={articleDetails?.subtitle}
          size={TextSize.L}
        />
        <div>
          <div className={styles.articleInfo}>
            <Icon Svg={EyeIcon} className={styles.icon} />
            <Text text={String(articleDetails?.views)} />
          </div>
          <div className={styles.articleInfo}>
            <Icon Svg={CalendarIcon} className={styles.icon} />
            <Text text={articleDetails?.createdAt} />
          </div>
        </div>
        {articleDetails?.blocks.map(blockGenerator)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(styles.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>

  );
});
