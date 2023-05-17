import './ui-paragraph.scss';
import classNames from 'classnames';
import { FC } from 'react';

type Props = {
  size?: ParagraphSize;
  bold?: boolean;
  centered?: boolean;
  children?: any;
  className?: string;
};

export enum ParagraphSize {
  small = 'paragraph_small',
  medium = 'paragraph_medium',
  large = 'paragraph_large',
  extraLarge = 'paragraph_extra-large',
}

export const UiParagraph: FC<Props> = ({
  children,
  className,
  size = ParagraphSize.medium,
  bold,
  centered = false,
  ...props
}) => {
  return (
    <p {...props} className={classNames('paragraph', size, bold, { centered })}>
      {children}
    </p>
  );
};
