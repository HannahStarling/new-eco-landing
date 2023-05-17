import './ui-accent.scss';
import classNames from 'classnames';
import { FC } from 'react';

export enum AccentColor {
  main = 'accent_main',
  presentation = 'accent_presentation',
}

export type Props = {
  color?: AccentColor;
  children?: any;
};

export const UiAccent: FC<Props> = ({ children, color = AccentColor.main, ...props }) => {
  return (
    <span {...props} className={classNames('accent', color)}>
      {children}
    </span>
  );
};
