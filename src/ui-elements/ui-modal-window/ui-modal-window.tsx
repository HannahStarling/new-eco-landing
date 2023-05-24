<<<<<<< HEAD
import "./ui-modal-window.scss";
import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
=======
import './ui-modal-window.scss';
import classNames from 'classnames';
import { FC } from 'react';
>>>>>>> 0c9b9da66bd7626183050583773d920a12eb9d0a

interface IProps {
  visible: boolean;
  children?: React.ReactNode | React.ReactElement;
  className?: string;
}

<<<<<<< HEAD
export const UiModal: FC<PropsWithChildren<IProps>> = ({
  children,
  className,
  visible,
  ...props
}) => {
=======
export const UiModal: FC<IProps> = ({ children, className, visible, ...props }) => {
>>>>>>> 0c9b9da66bd7626183050583773d920a12eb9d0a
  return (
    <aside className={classNames('modal', className, { modal_opened: visible })}>
      <div {...props} className={classNames('modal__inner', className)}>
        {children}
      </div>
    </aside>
  );
};
