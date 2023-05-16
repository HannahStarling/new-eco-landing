import './ui-sub-title.scss'
import classNames from "classnames";
import {FC} from "react";

export const UiSubTitle: FC = ({children, className, ...props}) => {
  return <h2 {...props} className={classNames(`title title_subtitle`, className)}>{children}</h2>
}
