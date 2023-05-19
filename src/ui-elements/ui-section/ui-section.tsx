import "./ui-section.scss";
import classNames from "classnames";
import { FC } from "react";

interface IProps {
  children?: any;
  className?: string;
  fullWidth?: boolean;
}

export const UiSection: FC<IProps> = ({
  children,
  className,
  fullWidth = false,
  ...props
}) => {
  return (
    <section className={"section"}>
      <div
        {...props}
        className={classNames(
          className,
          !fullWidth ? `section__container` : null
        )}
      >
        {children}
      </div>
    </section>
  );
};
