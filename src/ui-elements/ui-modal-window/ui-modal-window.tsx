import "./ui-modal-window.scss";
import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

interface IProps {
  visible: boolean;
  children?: any;
  className?: string;
}

export const UiModal: FC<PropsWithChildren<IProps>> = ({
  children,
  className,
  visible,
  ...props
}) => {
  return (
    <aside
      className={classNames("modal", className, { modal_opened: visible })}
    >
      <div {...props} className={classNames("modal__inner", className)}>
        {children}
      </div>
    </aside>
  );
};
