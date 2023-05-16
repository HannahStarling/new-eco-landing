import './styles.scss'

export default function Title({children, level, className, ...props}) {
  switch (level) {
    case 2:
      return <h2 {...props} className={`title title__sub ${className}`}>{children}</h2>
    case 3:
      return <h3 {...props} className={`title title__section ${className}`}>{children}</h3>
    case 4:
      return <h4 {...props} className={`title title__header ${className}`}>{children}</h4>
    case 1:
    default:
      return <h1 {...props} className={`title title__main ${className}`}>{children}</h1>
  }
}