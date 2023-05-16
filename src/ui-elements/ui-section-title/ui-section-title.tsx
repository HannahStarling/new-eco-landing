import './ui-section-title.scss'
import classNames from "classnames";
import {FC} from "react";

export const UiSectionTitle: FC = ({children, className, ...props}) => {
  return <h2 {...props} className={classNames(`title title_section`, className)}>{children}</h2>
}
