import {FC} from 'react';
import classNames from 'classnames';
import './ui-chips.scss';

type Props = {
  className?: string;
  label?: string;
};

export const UiChips: FC<Props> = ({children, className}) => (
  <div className={classNames(className, 'ui-chips')}>{children}</div>
);
