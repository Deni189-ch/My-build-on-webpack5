import { FC } from 'react';
import clsx from 'clsx';

import { ButtonProps } from './types';

import styles from './Button.module.scss'

export const Button: FC<ButtonProps> = ({
  variant = 'default',
  type = 'button',
  size= 'small',
  children,
  disabled,
  onClick,
  dataAtribut = 'btn',
}) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles[`${variant}Button`]]: variant,
        [styles[`${size}Button`]]: size,
      })}
      type={type}
      data-type={dataAtribut}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
