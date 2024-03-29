import "./ui-modal-window.scss";
import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface IProps {
  visible: boolean;
  children?: React.ReactNode | React.ReactElement;
  className?: string;
}

export const UiModal: FC<PropsWithChildren<IProps>> = ({
  children,
  className,
  visible,
  ...props
}) => {
  return createPortal(
    <aside
      className={classNames("modal", className, {
        modal_opened: visible,
      })}
    >
      <div className="modal__container">
        <div {...props} className={classNames("modal__inner ", className)}>
          {children}
        </div>
      </div>
    </aside>,
    document.body
  );
};
