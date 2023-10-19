import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

const BugButton = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  const onThrow = () => setError((prev) => !prev);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={onThrow}>{t('throw error')}</Button>;
};

export default BugButton;
