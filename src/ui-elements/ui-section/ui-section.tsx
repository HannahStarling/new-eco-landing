<<<<<<< HEAD
import "./ui-section.scss";
import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
=======
import './ui-section.scss';
import classNames from 'classnames';
import { FC } from 'react';
>>>>>>> 0c9b9da66bd7626183050583773d920a12eb9d0a

interface IProps {
  children?: React.ReactNode | React.ReactElement;
  className?: string;
  fullWidth?: boolean;
}

<<<<<<< HEAD
export const UiSection: FC<PropsWithChildren<IProps>> = ({
  children,
  className,
  fullWidth = false,
  ...props
}) => {
=======
export const UiSection: FC<IProps> = ({ children, className, fullWidth = false, ...props }) => {
>>>>>>> 0c9b9da66bd7626183050583773d920a12eb9d0a
  return (
    <section id={className} className={'section'}>
      <div {...props} className={classNames(className, !fullWidth ? `section__container` : null)}>
        {children}
      </div>
    </section>
  );
};
