import './ui-chips.scss'
import classNames from "classnames";

export default function UiChips({children, className, ...props}) {
  return <div {...props} className={classNames('chips', className)}>{children}</div>
}