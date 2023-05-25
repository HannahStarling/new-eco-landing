import "./ui-main-title.scss";
import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

interface IProps {
  className?: string;
}

export const UiMainTitle: FC<PropsWithChildren<IProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h1 {...props} className={classNames(`title title_main`, className)}>
      {children}
    </h1>
  );
};
