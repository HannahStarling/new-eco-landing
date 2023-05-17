import "./ui-list-item.scss";
import classNames from "classnames";
import { FC } from "react";

interface IProps {
  disc?: boolean;
}

export const UiListItem: FC<IProps> = ({
  children,
  className,
  disc = false,
  ...props
}) => {
  return (
    <li className={classNames(className, `list-item`, { disc })} {...props}>
      {children}
    </li>
  );
};
