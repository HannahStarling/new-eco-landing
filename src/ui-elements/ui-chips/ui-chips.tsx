import { FC } from "react";
import classNames from "classnames";
import "./ui-chips.scss";

type Props = {
  big?: boolean;
  label?: string;
};

export const UiChips: FC<Props> = ({ children, className, big = false }) => (
  <p className={classNames(className, "ui-chips", { big })}>{children}</p>
);
