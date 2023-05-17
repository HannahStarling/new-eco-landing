import './ui-list.scss';
import classNames from 'classnames';
import { FC } from 'react';

export enum ListType {
  vertical = 'list_vertical',
}

interface IProps {
  type?: ListType;
  disc?: boolean;
  children?: any;
  className?: string;
}

export const UiList: FC<Props> = ({ children, className, type, disc = false, ...props }) => {
  return (
    <ul {...props} className={classNames(className, `list`, type, { disc })}>
      {children}
    </ul>
  );
};
