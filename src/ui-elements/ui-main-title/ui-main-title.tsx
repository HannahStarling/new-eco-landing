import "./ui-main-title.scss";
import classNames from "classnames";
import { FC } from "react";

export const UiMainTitle: FC = ({ children, className, ...props }) => {
  return (
    <h1 {...props} className={classNames(`title title_main`, className)}>
      {children}
    </h1>
  );
};
