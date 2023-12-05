import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button';
import { counterAction } from '../models/slice/CounterSlice';
import { getCounterValue } from '../models/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterAction.increment());
  };

  const decrement = () => {
    dispatch(counterAction.decrement());
  };

  return (
    <div>
      <h1>{counterValue}</h1>
      <Button onClick={increment}>
        increment
      </Button>
      <Button onClick={decrement}>
        decrement
      </Button>
    </div>
  );
};
