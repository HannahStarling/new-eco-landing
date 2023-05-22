import './ui-main-title.scss';
import classNames from 'classnames';
import { FC } from 'react';

type Props = {
  children?: React.ReactNode | React.ReactElement;
  className?: string;
};

export const UiMainTitle: FC<Props> = ({ children, className, ...props }) => {
  return (
    <h1 {...props} className={classNames(`title title_main`, className)}>
      {children}
    </h1>
  );
};
