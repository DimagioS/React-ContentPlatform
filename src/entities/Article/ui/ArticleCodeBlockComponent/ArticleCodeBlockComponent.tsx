import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code';

interface ArticleCodeBlockComponentProps {
  className?: string,
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const { className, block } = props;
  const { t } = useTranslation('article-details');

  return (
    <pre className={classNames('', {}, [className])}>
      <Code code={block?.code} />
    </pre>
  );
});
