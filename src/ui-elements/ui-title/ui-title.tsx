import './ui-title.scss'
import classNames from "classnames";

export default function UiTitle({children, level, className, ...props}) {
  switch (level) {
    case 2:
      return <h2 {...props} className={classNames(`title title_sub`, className)}>{children}</h2>
    case 3:
      return <h3 {...props} className={classNames(`title title_section`, className)}>{children}</h3>
    case 4:
      return <h4 {...props} className={classNames(`title title_header`, className)}>{children}</h4>
    case 5:
      return <h5 {...props} className={classNames(`title title_small`, className)}>{children}</h5>
    case 1:
    default:
      return <h1 {...props} className={classNames(`title title_main`, className)}>{children}</h1>
  }
}