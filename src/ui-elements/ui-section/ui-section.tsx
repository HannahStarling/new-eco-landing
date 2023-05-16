import './ui-section.scss'
import classNames from "classnames";
import {FC} from "react";

export const UiSection: FC = ({children, className, ...props}) => {
  return <section {...props} className={classNames(className, `section`)}>{children}</section>
}