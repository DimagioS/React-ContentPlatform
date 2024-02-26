import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Loader } from 'shared/ui/Loader';
import { Text } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = memo(({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t('Профиль')} />
        <Button className={styles.editBtn} theme={ButtonTheme.OUTLINE}>
          {t('Редактировать')}
        </Button>
      </div>
      <div className={styles.data}>
        <Input
          type="text"
          value={data?.first}
          placeholder={`${t('Ваше имя')}>`}
          className={styles.input}
        />
        <Input
          type="text"
          value={data?.lastname}
          placeholder={`${t('Ваша фамилия')}>`}
          className={styles.input}
        />
      </div>
    </div>
  );
});
