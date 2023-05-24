import { FC, PropsWithChildren } from "react";
import classNames from "classnames";
import "./ui-chips.scss";

interface IProps {
  className?: string;
  big?: boolean;
  label?: string;
  children?: React.ReactNode | React.ReactElement;
}

export const UiChips: FC<PropsWithChildren<IProps>> = ({
  children,
  className,
  big = false,
}) => <p className={classNames(className, "ui-chips", { big })}>{children}</p>;
