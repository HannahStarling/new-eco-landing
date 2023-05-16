import './ui-title.scss'
import classNames from "classnames";

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

export default function UiTitle({children, size = TitleSize.large, className, ...props}: {
  children: React.ReactNode;
  size: TitleSize
}) {
  return <h3 {...props} className={classNames(`title`, className, size)}>{children}</h3>
}
