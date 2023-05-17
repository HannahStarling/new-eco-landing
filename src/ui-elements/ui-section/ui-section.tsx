import './ui-section.scss';
import classNames from 'classnames';
import { FC } from 'react';

type Props = {
  children?: any;
  className?: string;
};

export const UiSection: FC<Props> = ({ children, className, ...props }) => {
  return (
    <section {...props} className={classNames(className, `section`)}>
      {children}
    </section>
  );
};
