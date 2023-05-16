import './styles.scss'
import classNames from "classnames";

export enum ParagraphSize {
  small = 'paragraph__small',
  general = 'paragraph__general',
  large = 'paragraph__large',
}

export default function Paragraph({children, className, size = ParagraphSize.general, ...props}) {
  return <p {...props} className={classNames('paragraph', size)}>{children}</p>
}