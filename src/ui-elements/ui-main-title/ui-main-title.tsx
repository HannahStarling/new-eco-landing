import './ui-main-title.scss'
import classNames from "classnames";

export default function UiMainTitle({children, level, className, ...props}) {
  return <h1 {...props} className={classNames(`title title_main`, className)}>{children}</h1>
}
