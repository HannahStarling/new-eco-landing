import './ui-title.scss';
import classNames from 'classnames';
import { FC } from 'react';

export enum TitleSize {
  /**
   *   font-size: 32px;
   */
  extraLarge = 'title_extra-large',
  /**
   *   font-size: 28px;
   */
  large = 'title_large',
  /**
   *   font-size: 20px;
   */
  medium = 'title_medium',
  /**
   *   font-size: 18px;
   */
  small = 'title_small',
  /**
   *   font-size: 15px;
   */
  extraSmall = 'title_extra-small',
}

interface IProps {
  size?: TitleSize;
  /**
   *   font-weight: 600;
   */
  bold?: boolean;
  children?: any;
  className?: string;
}

export const UiTitle: FC<IProps> = ({
  children,
  size = TitleSize.large,
  className,
  bold = true,
  ...props
}) => {
  return (
    <h3
      {...props}
      className={classNames(`title`, className, size, {
        'medium-weight': !bold,
      })}>
      {children}
    </h3>
  );
};
