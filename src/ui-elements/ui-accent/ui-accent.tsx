import './ui-accent.scss'
import classNames from "classnames";
import {FC} from "react";

export enum AccentColor {
  green = 'accent_green',
  blue = 'accent_blue'
}

export type Props = {
  color?: AccentColor
}

export const UiAccent: FC<Props> = ({children, color = AccentColor.blue, ...props}) => {
  return <span {...props} className={classNames('accent', color)}>{children}</span>
}