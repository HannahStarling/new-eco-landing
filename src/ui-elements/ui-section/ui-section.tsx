import "./ui-section.scss";
import classNames from "classnames";
import { FC } from "react";

interface IProps {
  children?: any;
  className?: string;
}

export const UiSection: FC<IProps> = ({ children, className, ...props }) => {
  return (
    <section {...props} className={classNames(className, `section`)}>
      {children}
    </section>
  );
};
