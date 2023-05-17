import './ui-section-title.scss';
import classNames from 'classnames';
import { FC } from 'react';

type Props = {
  children?: any;
  className?: string;
};

export const UiSectionTitle: FC<Props> = ({ children, className, ...props }) => {
  return (
    <h2 {...props} className={classNames(`title title_section`, className)}>
      {children}
    </h2>
  );
};
