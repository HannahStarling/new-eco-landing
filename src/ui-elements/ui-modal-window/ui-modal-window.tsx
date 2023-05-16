import './ui-modal-window.scss'
import classNames from "classnames";
import {FC} from "react";

type Props = {
  visible: boolean
}

export const UiModal: FC<Props> = ({children, className, visible, ...props}) => {
  return <aside className={classNames('modal', className, {'modal_opened': visible})}>
    <div {...props} className={classNames('modal__inner', className)}>{children}</div>
  </aside>
}