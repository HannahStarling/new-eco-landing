import './styles.scss'
import classNames from "classnames";

export enum ParagraphSize {
  small = 'paragraph_small',
  general = 'paragraph_general',
  large = 'paragraph_large',
}

export default function Paragraph({children, className, size = ParagraphSize.general, ...props}) {
  return <p {...props} className={classNames('paragraph', size)}>{children}</p>
}