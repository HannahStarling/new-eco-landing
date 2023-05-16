import './ui-article.scss'
import classNames from "classnames";

export default function UiArticle({children, className, ...props}) {
  return <article {...props} className={classNames('article', className)}>{children}</article>
}