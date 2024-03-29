import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton';
import { Text } from 'shared/ui/Text';
import { Avatar } from 'shared/ui/Avatar';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Comment } from '../../model/types/comment';

import styles from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const {
    className, comment, isLoading,
  } = props;

  if (isLoading) {
    return (
      <div className={classNames(styles.CommentCard, {}, [className, styles.loading])}>
        <div className={styles.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton height={16} width={100} className={styles.username} />
        </div>
        <Skeleton className={styles.text} width="100%" height={50} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={classNames(styles.CommentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={styles.header}>
        {
          comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />
        }
        <Text className={styles.username} title={comment.user.username} />
      </AppLink>
      <Text className={styles.text} text={comment.text} />
    </div>
  );
});
