import { FC } from 'react';
import classNames from 'classnames';
import './ui-chips.scss';

export type Props = {
  className?: string;
  label?: string;
  children?: any;
};

export const UiChips: FC<Props> = ({ children, className }) => (
  <div className={classNames(className, 'ui-chips')}>{children}</div>
);
