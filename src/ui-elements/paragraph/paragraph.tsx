import './styles.scss'

export default function Paragraph({children, className, ...props}) {
  return <p {...props} className={`paragraph ${className}`}>{children}</p>
}