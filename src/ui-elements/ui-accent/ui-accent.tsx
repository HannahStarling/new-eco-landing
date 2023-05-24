<<<<<<< HEAD
import "./ui-accent.scss";
import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import { Color } from "@/types/color";
=======
import './ui-accent.scss';
import classNames from 'classnames';
import { FC } from 'react';
import { Color } from '@/types/color';
>>>>>>> 0c9b9da66bd7626183050583773d920a12eb9d0a

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
    <span {...props} className={classNames('accent', color, { bold })}>
      {children}
    </span>
  );
};
