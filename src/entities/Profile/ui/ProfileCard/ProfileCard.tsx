/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader';
import { Input } from 'shared/ui/Input';
import { Profile } from 'entities/Profile/model/types/ProfileSchema';
import { Text } from 'shared/ui/Text';
import { TextAlign, TextTheme } from 'shared/ui/Text/ui/Text';
import { Avatar } from 'shared/ui/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Cuontry, CuontrySelect } from 'entities/Country';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean,
  onChangefirst?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Cuontry) => void;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangefirst,
    onChangeLastname,
    onChangeUsername,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');

  const mods: Mods = {
    [styles.readonly]: !readonly,
  };

  if (isLoading) {
    return (
      <div className={classNames(styles.ProfileCard, {}, [className, styles.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(styles.ProfileCard, {}, [className, styles.error])}>
        <Text
          title={t('Произошла ошибка при загрузку данных')}
          text={t('Перезагрузите страницу')}
          align={TextAlign.CENTER}
          theme={TextTheme.ERROR}
        />
      </div>
    );
  }

  return (
    <div className={classNames(styles.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <div className={styles.avatarWrapper}>
          <Avatar
            alt="avatar"
            src={data?.avatar}
            size={100}
          />
        </div>
      )}
      <div className={styles.data}>
        <Input
          className={styles.input}
          type="text"
          value={data?.first}
          onChange={onChangefirst}
          placeholder={`${t('Ваше имя')}>`}
          readOnly={readonly}
        />
        <Input
          className={styles.input}
          type="text"
          onChange={onChangeLastname}
          value={data?.lastname}
          placeholder={`${t('Ваша фамилия')}>`}
          readOnly={readonly}
        />
        <Input
          className={styles.input}
          type="text"
          onChange={onChangeUsername}
          value={data?.username}
          placeholder={`${t('Ваш никнейм')}>`}
          readOnly={readonly}
        />
        <Input
          className={styles.input}
          type="text"
          onChange={onChangeAge}
          value={data?.age}
          placeholder={`${t('Ваш возраст')}>`}
          readOnly={readonly}
        />
        <Input
          className={styles.input}
          type="text"
          onChange={onChangeCity}
          value={data?.city}
          placeholder={`${t('Город')}>`}
          readOnly={readonly}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          className={styles.select}
          readOnly={readonly}
        />
        <CuontrySelect
          value={data?.country}
          onChange={onChangeCountry}
          className={styles.select}
          readOnly={readonly}
        />
        <Input
          className={styles.input}
          type="text"
          onChange={onChangeAvatar}
          value={data?.avatar}
          placeholder={`${t('Изображение')}>`}
          readOnly={readonly}
        />
      </div>
    </div>
  );
});
