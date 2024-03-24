import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import styles from './Code.module.scss';

interface CodeProps {
  className?: string;
  code: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, code } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(code);
  }, [code]);

  return (
    <pre className={classNames(styles.Code, {}, [className])}>
      <Button onClick={onCopy} className={styles.copyBtn} theme={ButtonTheme.CLEAR}>
        <CopyIcon className={styles.copyIcon} />
      </Button>
      <code>
        {code}
      </code>
    </pre>
  );
});
