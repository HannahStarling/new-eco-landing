import './ui-list.scss'
import classNames from "classnames";
import {FC} from "react";

export enum ListType {
  vertical = 'list_vertical',
}

type Props = {
  type?: ListType
  disc?: boolean
}

export const UiList: FC<Props> = ({children, className, type, disc = false, ...props}) => {
  return (
    <ul {...props} className={classNames(className, `list`, type, {disc})}>
      {children}
    </ul>
  );
};