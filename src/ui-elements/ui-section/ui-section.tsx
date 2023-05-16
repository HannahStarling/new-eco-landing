import './ui-section.scss'
import classNames from "classnames";

export default function UiSection({children, className, ...props}) {
  return <section {...props} className={classNames(`section`, className)}>{children}</section>
}