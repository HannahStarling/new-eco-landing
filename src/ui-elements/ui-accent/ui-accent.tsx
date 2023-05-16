import './ui-accent.scss'
import classNames from "classnames";

export enum AccentColor {
  main = 'accent_main',
  presentation = 'accent_presentation'
}

export default function UiAccent({children, color = AccentColor.main, ...props}: {
  children: React.ReactNode,
  color?: AccentColor
}) {
  return <span {...props} className={classNames('accent', color)}>{children}</span>
}