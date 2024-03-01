import React, {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readOnly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    placeholder,
    autofocus,
    value,
    onChange,
    type = 'text',
    readOnly,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      inputRef?.current?.focus();
    }
  }, [autofocus]);

  const isCaretVisible = !readOnly && isFocused;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e?.target?.value);
  };

  const mods: Mods = {
    [styles.readonly]: readOnly,
  };

  return (
    <div className={classNames(styles.Input, mods, [className])}>
      {placeholder && (
        <div>
          <span>{placeholder}</span>
        </div>
      )}
      <div className={styles.caretWrapper}>
        <input
          ref={inputRef}
          type={type}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleChange}
          onSelect={handleSelect}
          value={value}
          readOnly={readOnly}
          {...otherProps}
        />
        {isCaretVisible
          && (
            <span
              className={styles.caret}
              style={{ left: `${caretPosition * 9}px` }}
            />
          )}
      </div>
    </div>
  );
});
