import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import styles from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation('article-details');

  if (isLoading) {
    return (
      <div>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  return (
    <div className={classNames('', {}, [className])}>
      {
        comments?.length
          ? comments?.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              className={styles.comment}
            />
          ))
          : <Text text={t('Комментарии отсутствуют')} />
      }
    </div>
  );
});
