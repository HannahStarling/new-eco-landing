import './ui-modal-window.scss'
import classNames from "classnames";

export default function UiModal({children, className, visible, ...props}: {
  children: React.ReactNode;
  visible: boolean
}) {
  return <aside className={classNames('modal', className, {'modal_opened': visible})}>
    <div {...props} className={classNames('modal__container', className)}>{children}</div>
  </aside>
}