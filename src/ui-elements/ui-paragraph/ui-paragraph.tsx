import './ui-paragraph.scss'
import classNames from "classnames";

export enum ParagraphSize {
  smallBold = 'paragraph_small-bold',
  mediumBold = 'paragraph_medium-bold',
  largeBold = 'paragraph_large-bold',
  small = 'paragraph_small',
  medium = 'paragraph_medium',
  large = 'paragraph_large',
}

export default function UiParagraph({children, className, size = ParagraphSize.medium, ...props}: {
  children: React.ReactNode;
  size: ParagraphSize
}) {
  return <p {...props} className={classNames('paragraph', size)}>{children}</p>
}