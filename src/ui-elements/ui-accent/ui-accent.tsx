import './ui-accent.scss';
import classNames from 'classnames';
import { FC } from 'react';
import { Color } from '@/types/color';

export type Props = {
  color?: Color;
  children?: any;
};

export const UiAccent: FC<Props> = ({ children, color = Color.blue, ...props }) => {
  return (
    <span {...props} className={classNames('accent', color)}>
      {children}
    </span>
  );
};
