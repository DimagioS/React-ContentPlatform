import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select';
import { Cuontry } from '../../model/types/country';

interface CuontrySelectProps {
  className?: string;
  value?: Cuontry;
  onChange?: (value: Cuontry) => void;
  readOnly?: boolean;
}

const opions = [
  { content: Cuontry.Russia, value: Cuontry.Russia },
  { content: Cuontry.Serbia, value: Cuontry.Serbia },
  { content: Cuontry.China, value: Cuontry.China },
  { content: Cuontry.UAE, value: Cuontry.UAE },
];

export const CuontrySelect = memo((props: CuontrySelectProps) => {
  const {
    className, value, onChange, readOnly,
  } = props;
  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Cuontry);
  }, [onChange]);

  return (
    <Select
      className={className}
      lable={t('Страна')}
      options={opions}
      value={value}
      onChange={onChangeHandler}
      readonly={readOnly}
    />
  );
});
