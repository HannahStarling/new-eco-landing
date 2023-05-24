import "./ui-article.scss";
import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

export const UiArticle: FC<PropsWithChildren<any>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <article {...props} className={classNames("article", className)}>
      {children}
    </article>
  );
};
