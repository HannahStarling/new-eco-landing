import './ui-sub-title.scss'
import classNames from "classnames";

export default function UiSubTitle({children, level, className, ...props}) {
  return <h2 {...props} className={classNames(`title title_subtitle`, className)}>{children}</h2>
}
