import { ArticleTextBlock } from 'entities/Article/model/types/article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import styles from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block?: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const { className, block } = props;
  const { t } = useTranslation('article-details');

  const paragraphGenerator = useCallback((paragraph) => (
    <Text
      key={paragraph}
      text={paragraph}
      className={styles.paragraph}
    />
  ), []);

  return (
    <div className={classNames('', {}, [className])}>
      {block?.title && (
        <Text title={block.title} className={styles.title} />
      )}
      {block?.paragraphs.map(paragraphGenerator)}
    </div>
  );
});
