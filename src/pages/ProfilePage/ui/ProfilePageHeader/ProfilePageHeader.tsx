import {
  profileActions, updateProfileData,
} from 'entities/Profile';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Text } from 'shared/ui/Text';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
  readonly?: boolean;
}

export const ProfilePageHeader = memo(({ className, readonly }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();
  const { id } = useParams<{id: string}>();
  const user = useSelector(getUserAuthData);
  const canEdin = id === user?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  return (
    <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {
        canEdin && (
          <div className={styles.btnsWrapper}>
            {readonly ? (
              <Button className={styles.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                {t('Редактировать')}
              </Button>
            )
              : (
                <div>
                  <Button theme={ButtonTheme.OUTLINE_RED} onClick={onSave}>
                    {t('Сохранить')}
                  </Button>
                  <Button className={styles.editBtn} theme={ButtonTheme.OUTLINE} onClick={onCancelEdit}>
                    {t('Отмена')}
                  </Button>
                </div>
              )}
          </div>
        )
      }
    </div>
  );
});
