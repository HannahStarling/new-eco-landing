"use client";

import "./ui-list-item.scss";
import classNames from "classnames";
import { FC, PropsWithChildren, SyntheticEvent } from "react";

interface IProps {
  disc?: boolean;
  children?: any;
  className?: string;
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
