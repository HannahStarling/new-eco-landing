import './ui-article.scss';
import classNames from 'classnames';
import { FC } from 'react';

type Props = {
  children?: React.ReactNode | React.ReactElement;
  className?: string;
};

export const UiArticle: FC<Props> = ({ children, className, ...props }) => {
  return (
    <article {...props} className={classNames('article', className)}>
      {children}
    </article>
  );
};
