<<<<<<< HEAD
"use client";

import "./ui-list-item.scss";
import classNames from "classnames";
import {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  SyntheticEvent,
} from "react";
=======
import './ui-list-item.scss';
import classNames from 'classnames';
import { FC } from 'react';
>>>>>>> 0c9b9da66bd7626183050583773d920a12eb9d0a

interface IProps {
  disc?: boolean;
  children?: any;
  className?: string;
<<<<<<< HEAD
  elementKey?: string;
  handleSetActive?: (
    e: SyntheticEvent<Element, Event>,
    key: string | undefined
  ) => void;
}

export const UiListItem: FC<PropsWithChildren<IProps>> = ({
  children,
  className,
  disc = false,
  elementKey,
  handleSetActive,
  ...props
}) => {
=======
  onClick?: (e: any) => void;
}

export const UiListItem: FC<IProps> = ({ children, className, disc = false, ...props }) => {
>>>>>>> 0c9b9da66bd7626183050583773d920a12eb9d0a
  return (
    <li
      onClick={(event: SyntheticEvent) => handleSetActive?.(event, elementKey)}
      className={classNames(className, `list-item`, { disc })}
      {...props}
    >
      {children}
    </li>
  );
};
