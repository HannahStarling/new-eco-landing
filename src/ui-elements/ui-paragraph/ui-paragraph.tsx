<<<<<<< HEAD
import "./ui-paragraph.scss";
import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
=======
import './ui-paragraph.scss';
import classNames from 'classnames';
import { FC } from 'react';
>>>>>>> 0c9b9da66bd7626183050583773d920a12eb9d0a

interface IProps {
  size?: ParagraphSize;
  bold?: boolean;
  centered?: boolean;
  children?: React.ReactNode | React.ReactElement;
  className?: string;
  style?: any;
}

export enum ParagraphSize {
  /**
   *       font-size: 24px;
   */
  small = 'paragraph_small',
  /**
   *       font-size: 20px;
   */
  medium = 'paragraph_medium',
  /**
   *       font-size: 18px;
   */
  large = 'paragraph_large',
  /**
   *       font-size: 16px;
   */
  extraLarge = 'paragraph_extra-large',
  /**
   *       font-size: 12px;
   */
  extraSmall = 'paragraph_extra-small',
}

export const UiParagraph: FC<PropsWithChildren<IProps>> = ({
  children,
  className,
  size = ParagraphSize.medium,
  bold,
  centered = false,
  ...props
}) => {
  return (
    <p {...props} className={classNames(className, 'paragraph', size, bold, { centered })}>
      {children}
    </p>
  );
};
