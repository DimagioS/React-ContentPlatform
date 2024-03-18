import { memo } from 'react';
import { useTranslation } from 'react-i18next';

export const ArticleImageBlockComponent = memo(() => {
  const { t } = useTranslation('article-details');

  return (
    <div>Article Code Block</div>
  );
});
