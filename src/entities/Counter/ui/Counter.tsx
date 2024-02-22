import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { counterActions } from '../models/slice/counterSlice';
import { getCounterValue } from '../models/selectors/getCounterValue/getCounterValue';

export const Counter = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button data-testid="increment-btn" onClick={increment}>
        {t('Увелечение')}
      </Button>
      <Button data-testid="decrement-btn" onClick={decrement}>
        {t('Уменьшение')}
      </Button>
    </div>
  );
});
