import { classNames } from './classNames';

describe('classsName', () => {
  test('test with cls', () => {
    expect(classNames('className')).toBe('className');
  });

  test('with additional class', () => {
    expect(classNames('className', {}, ['all'])).toBe('className all');
  });

  test('add mods', () => {
    expect(classNames('className', { green: true }, ['all'])).toBe('className all green');
  });

  test('with mods false', () => {
    expect(classNames('className', { green: false }, ['all'])).toBe('className all');
  });

  test('with mods undefined', () => {
    expect(classNames('className', { green: undefined }, ['all'])).toBe('className all');
  });
});
