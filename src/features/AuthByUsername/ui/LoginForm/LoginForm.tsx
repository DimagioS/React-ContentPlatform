import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { DynamicModuleLoader } from 'shared/lib/components';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginByUsername } from '../../modal/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../modal/slice/loginSlice';
import { getLoginUsername } from '../../modal/selectors/getLoginUsername/getLoginUsername';
import { getLoginError } from '../../modal/selectors/getLoginError/getLoginError';
import { getLoginPassword } from '../../modal/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../modal/selectors/getLoginIsLoading/getLoginIsLoading';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
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

  const submitForm = useCallback(() => {
    dispatch(loginByUsername({ password, username }));
  }, [dispatch, password, username]);

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
