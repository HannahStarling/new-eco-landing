import './ui-paragraph.scss'
import classNames from "classnames";

export enum ParagraphSize {
  small = 'paragraph_small',
  medium = 'paragraph_medium',
  large = 'paragraph_large',
  extraLarge = 'paragraph_extra-large'
}

export default function UiParagraph({children, className, size = ParagraphSize.medium, bold, centered = false, ...props}: {
  children: React.ReactNode;
  size?: ParagraphSize
  bold?: boolean
  centered?: boolean
}) {
  return <p {...props} className={classNames('paragraph', size, bold, {centered})}>{children}</p>

}