<<<<<<< HEAD
import "./ui-article.scss";
import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

export const UiArticle: FC<PropsWithChildren<any>> = ({
  children,
  className,
  ...props
}) => {
=======
import './ui-article.scss';
import classNames from 'classnames';
import { FC } from 'react';

type Props = {
  children?: React.ReactNode | React.ReactElement;
  className?: string;
};

export const UiArticle: FC<Props> = ({ children, className, ...props }) => {
>>>>>>> 0c9b9da66bd7626183050583773d920a12eb9d0a
  return (
    <article {...props} className={classNames('article', className)}>
      {children}
    </article>
  );
};
