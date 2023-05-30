import "./ui-section.scss";
import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import { Role } from "@/types/models";

interface IProps {
  id?: string | Role;
  children?: React.ReactNode | React.ReactElement;
  className?: string;
  fullWidth?: boolean;
}

export const UiSection: FC<PropsWithChildren<IProps>> = ({
  children,
  className,
  fullWidth = false,
  ...props
}) => {
  return (
    <section id={className} className={"section"}>
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
