import { FC } from "react";
import classNames from "classnames";
import "./ui-chips.scss";

interface IProps {
  big?: boolean;
  label?: string;
}

export const UiChips: FC<IProps> = ({ children, className, big = false }) => (
  <p className={classNames(className, "ui-chips", { big })}>{children}</p>
);
