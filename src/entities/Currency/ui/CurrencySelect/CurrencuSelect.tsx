import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readOnly?: boolean;
}

const opions = [
  { content: Currency.EUR, value: Currency.EUR },
  { content: Currency.RSD, value: Currency.RSD },
  { content: Currency.RUB, value: Currency.RUB },
  { content: Currency.USD, value: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className, value, onChange, readOnly,
  } = props;
  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <Select
      className={className}
      lable={t('Валюта')}
      options={opions}
      value={value}
      onChange={onChangeHandler}
      readonly={readOnly}
    />
  );
});
