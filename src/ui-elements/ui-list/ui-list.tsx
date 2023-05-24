<<<<<<< HEAD
import "./ui-list.scss";
import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
=======
import './ui-list.scss';
import classNames from 'classnames';
import { FC } from 'react';
>>>>>>> 0c9b9da66bd7626183050583773d920a12eb9d0a

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

export const UiList: FC<PropsWithChildren<IProps>> = ({
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
