import { memo, useEffect } from 'react';
import { profileReducer } from 'entities/Profile/model/slice/profileSlice';
import { DynamicModuleLoader } from 'shared/lib/components';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ProfileCard, fetchProfileData } from 'entities/Profile';

const ProfilePage = memo(() => {
  const dispatch = useAppDispatch();

  const initialReducers: ReducersList = {
    profile: profileReducer,
  };

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
