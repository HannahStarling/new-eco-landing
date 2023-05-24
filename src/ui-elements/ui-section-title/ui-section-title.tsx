import "./ui-section-title.scss";
import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

interface IProps {
  children?: React.ReactNode | React.ReactElement;
  className?: string;
}

export const UiSectionTitle: FC<PropsWithChildren<IProps>> = ({
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
