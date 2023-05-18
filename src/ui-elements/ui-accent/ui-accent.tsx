import "./ui-accent.scss";
import classNames from "classnames";
import { FC } from "react";
import { Color } from "@/types/color";

export interface IProps {
  bold?: boolean;
  color?: Color;
  children?: any;
}

export const UiAccent: FC<IProps> = ({
  children,
  color = Color.greenMain,
  bold = false,
  ...props
}) => {
  return (
    <span {...props} className={classNames("accent", color, bold)}>
      {children}
    </span>
  );
};
