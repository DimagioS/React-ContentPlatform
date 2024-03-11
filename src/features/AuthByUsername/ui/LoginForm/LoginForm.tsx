import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { DynamicModuleLoader } from 'shared/lib/components';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const initialReducers: ReducersList = {
    loginForm: loginReducer,
  };

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const submitForm = useCallback(async () => {
    const result = await dispatch(loginByUsername({ password, username }));

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, password, onSuccess, username]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(styles.LoginForm, {}, [className])}>
        <Text
          title={t('Форма авторизации')}
          theme={TextTheme.PRIMARY}
        />

        {error && <Text text={t('Вы ввели неверный логин и пароль')} theme={TextTheme.ERROR} />}

        <div className={styles.inputs}>
          <Input
            type="text"
            placeholder={`${t('Имя пользователя')}>`}
            autofocus
            onChange={onChangeUsername}
            value={username}
          />
          <Input
            type="text"
            placeholder={`${t('Пароль')}>`}
            onChange={onChangePassword}
            value={password}
          />
        </div>
        <div className={styles.loginBtn}>
          <Button
            theme={ButtonTheme.OUTLINE}
            onClick={submitForm}
            disabled={isLoading}
          >
            {t('Войти')}
          </Button>
        </div>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
