import "./ui-article.scss";
import classNames from "classnames";
import { FC } from "react";

export const UiArticle: FC = ({ children, className, ...props }) => {
  return (
    <article {...props} className={classNames("article", className)}>
      {children}
    </article>
  );
};
