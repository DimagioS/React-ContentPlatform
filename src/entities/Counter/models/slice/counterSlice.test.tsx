import { counterReducer, counterAction } from './counterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('CounterSlice', () => {
  test('increment', () => {
    const state: CounterSchema = { value: 10 };

    expect(counterReducer(state as CounterSchema, counterAction.increment)).toEqual({ value: 11 });
  });

  test('decrement', () => {
    const state: CounterSchema = { value: 10 };

    expect(counterReducer(state as CounterSchema, counterAction.decrement)).toEqual({ value: 9 });
  });

  test('empty store', () => {
    expect(counterReducer(undefined, counterAction.increment)).toEqual({ value: 1 });
  });
});
