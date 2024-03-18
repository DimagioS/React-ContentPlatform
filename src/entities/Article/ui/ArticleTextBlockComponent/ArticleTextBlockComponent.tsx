import { memo } from 'react';
import { useTranslation } from 'react-i18next';

export const ArticleTextBlockComponent = memo(() => {
  const { t } = useTranslation('article-details');

  return (
    <div>Article Code Block</div>
  );
});
