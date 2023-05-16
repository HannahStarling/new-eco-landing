import './ui-list-item.scss'
import classNames from "classnames";
import {FC} from "react";

type Props = {
  disc?: boolean
}

export const UiListItem: FC<Props> = ({children, className, disc = false, ...props}) => {
  return (
    <li className={classNames(className, `list-item`, {disc})} {...props}>
      {children}
    </li>
  );
};