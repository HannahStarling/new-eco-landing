import "./ui-section-title.scss";
import classNames from "classnames";
import { FC } from "react";

interface IProps {
  children?: any;
  className?: string;
}

export const UiSectionTitle: FC<IProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h2 {...props} className={classNames(`title title_section`, className)}>
      {children}
    </h2>
  );
};
