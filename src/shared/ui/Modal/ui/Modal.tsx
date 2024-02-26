import React, {
  FC, MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import Portal from 'shared/ui/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
  children?: ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal: FC<ModalProps> = (props) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  const ANIMATION_DELAY = 400;

  const mods: Mods = {
    [styles.opened]: isOpen,
    [styles.closed]: isClosing,
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeModal = useCallback(() => {
    if (onClose) {
      setIsClosing(true);

      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const keyClose = useCallback((e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      closeModal();
    }
  }, [closeModal]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', keyClose);
    }

    return () => {
      clearInterval(timerRef.current);
      window.removeEventListener('keydown', keyClose);
    };
  }, [isOpen, keyClose]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(styles.Modal, mods, [className])}>
        <div className={styles.overlay} onClick={closeModal}>
          <div className={styles.content} onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
