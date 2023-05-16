import './ui-list.scss'
import classNames from "classnames";
import React from "react";

export enum ListType {
  vertical = 'list_vertical',
}

export default function UiList({children, className, type, disc = false, ...props}: {
  children: React.ReactNode,
  type?: ListType
  disc?: boolean
}) {
  return (
    <ul {...props} className={classNames(className, `list`, type, {disc})}>
      {children}
    </ul>
  );
};