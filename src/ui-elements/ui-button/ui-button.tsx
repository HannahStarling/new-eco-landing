'use client';

import classNames from 'classnames';
import { FC } from 'react';
import './ui-button.scss';
import { Mode, Type } from './types';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  // отвечает за синий или голубой цвет кноки
  mode?: Mode;
  // отвечает за заполенение кнопки: заполненная или прозрачная
  fillType?: Type;
  isLoading?: boolean;
};

export const UiButton: FC<Props> = ({
  isLoading = false,
  disabled = false,
  mode = 'light',
  fillType = 'filled',
  onClick,
  className,
  children,
  ...props
}) => {
  const isDisabled = disabled || isLoading;
  const handleClick = (e: any) => !isDisabled && onClick?.(e);

  return (
    <button
      className={classNames(
        className,
        'ui-button',
        { 'ui-button__filled': fillType === 'filled' },
        { 'ui-button__outlined': fillType === 'outlined' },
        { 'ui-button__disabled': isDisabled },
        { 'ui-button__light': mode === 'light' },
        { 'ui-button__dark': mode === 'dark' },
      )}
      onClick={handleClick}
      type="button"
      {...props}>
      {children}
    </button>
  );
};
