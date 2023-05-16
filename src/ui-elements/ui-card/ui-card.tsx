import './ui-modal-window.scss'
import classNames from "classnames";

export default function UiCard({children, className, visible, ...props}) {
  return <div {...props} className={classNames('card', className)}>{children}</div>
}