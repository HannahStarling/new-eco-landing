import "./ui-list-item.scss";
import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

interface IProps {
  disc?: boolean;
  children?: any;
  className?: string;
}

export const UiListItem: FC<PropsWithChildren<IProps>> = ({
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
