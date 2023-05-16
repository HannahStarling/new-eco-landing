import './ui-title.scss'
import classNames from "classnames";

export enum TitleSize {
  extraLarge = 'title_extra-large',
  large = 'title_large',
  medium = 'title_medium',
  small = 'title_small',
  extraSmall = 'title_extra-small',
}

export default function UiTitle({children, size = TitleSize.large, className, ...props}) {
  return <h3 {...props} className={classNames(`title`, className, size)}>{children}</h3>
}
