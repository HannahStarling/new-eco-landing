import './ui-paragraph.scss';
import classNames from 'classnames';
import { FC } from 'react';

interface IProps {
  size?: ParagraphSize;
  bold?: boolean;
  centered?: boolean;
  children?: any;
  className?: string;
}

export enum ParagraphSize {
  small = 'paragraph_small',
  medium = 'paragraph_medium',
  large = 'paragraph_large',
  extraLarge = 'paragraph_extra-large',
  extraSmall = 'paragraph_extra-small',
}

export const UiParagraph: FC<IProps> = ({
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
