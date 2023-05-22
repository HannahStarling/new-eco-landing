import './ui-list.scss';
import classNames from 'classnames';
import { FC } from 'react';

export enum ListType {
  vertical = 'list_vertical',
}

interface IProps {
  centered?: boolean;
  type?: ListType;
  disc?: boolean;
  children?: React.ReactNode | React.ReactElement;
  className?: string;
}

export const UiList: FC<IProps> = ({
  children,
  className,
  type,
  disc = false,
  centered = false,
  ...props
}) => {
  return (
    <ul {...props} className={classNames(className, `list`, type, { disc, centered })}>
      {children}
    </ul>
  );
};
