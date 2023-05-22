import { FC } from 'react';
import classNames from 'classnames';
import './ui-chips.scss';

interface IProps {
  big?: boolean;
  label?: string;
  children?: React.ReactNode | React.ReactElement;
  className?: string;
}

export const UiChips: FC<IProps> = ({ children, className, big = false }) => (
  <p className={classNames(className, 'ui-chips', { big })}>{children}</p>
);
