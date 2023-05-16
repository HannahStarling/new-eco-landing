import './ui-section-title.scss'
import classNames from "classnames";

export default function UiSectionTitle({children, className, ...props}) {
  return <h2 {...props} className={classNames(`title title_section`, className)}>{children}</h2>
}
