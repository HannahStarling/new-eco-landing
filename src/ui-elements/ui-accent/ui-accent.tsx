import "./ui-accent.scss";
import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import { Color } from "@/types/color";

export interface IProps {
  bold?: boolean;
  color?: Color;
  children?: React.ReactNode | React.ReactElement;
}

export const UiAccent: FC<PropsWithChildren<IProps>> = ({
  children,
  color = Color.greenMain,
  bold = false,
  ...props
}) => {
  return (
    <span {...props} className={classNames("accent", color, { bold })}>
      {children}
    </span>
  );
};
