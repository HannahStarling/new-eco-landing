import "./ui-accent.scss";
import classNames from "classnames";
import { FC } from "react";
import { Color } from "@/types/color";

export interface IProps {
  color?: Color;
  children?: any;
}

export const UiAccent: FC<IProps> = ({
  children,
  color = Color.greenMain,
  ...props
}) => {
  return (
    <span {...props} className={classNames("accent", color)}>
      {children}
    </span>
  );
};
