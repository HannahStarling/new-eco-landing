<<<<<<< HEAD
import "./ui-main-title.scss";
import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

interface IProps {
  className?: string;
}

export const UiMainTitle: FC<PropsWithChildren<IProps>> = ({
  children,
  className,
  ...props
}) => {
=======
import './ui-main-title.scss';
import classNames from 'classnames';
import { FC } from 'react';

type Props = {
  children?: React.ReactNode | React.ReactElement;
  className?: string;
};

export const UiMainTitle: FC<Props> = ({ children, className, ...props }) => {
>>>>>>> 0c9b9da66bd7626183050583773d920a12eb9d0a
  return (
    <h1 {...props} className={classNames(`title title_main`, className)}>
      {children}
    </h1>
  );
};
