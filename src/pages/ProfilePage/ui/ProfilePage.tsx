import { memo } from 'react';
import { profileReducer } from 'entities/Profile/model/slice/profileSlice';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib/components';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const ProfilePage = memo(() => {
  const { t } = useTranslation();

  const initialReducers: ReducersList = {
    profile: profileReducer,
  };

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div>
        {t('Профиль')}
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
