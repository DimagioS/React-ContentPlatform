import {
  ChangeEvent, memo, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Select.module.scss';

interface SelectOptions {
    content: string;
    value: string;
}

interface SelectProps {
  className?: string;
  lable?: string;
  options: SelectOptions[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const {
    className, lable, options, onChange, value, readonly,
  } = props;

  const selectOpt = useMemo(() => options?.map((item) => (
    <option
      className={styles.option}
      key={item.value}
      value={item.value}
    >
      {item.content}
    </option>
  )), [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(styles.Select, {}, [className])}>
      {lable && (
        <span className={styles.lable}>{`${lable}>`}</span>
      )}
      <select
        value={value}
        className={styles.select}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {selectOpt}
      </select>
    </div>
  );
});
