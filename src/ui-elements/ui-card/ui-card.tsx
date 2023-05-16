import './ui-card.scss'
import classNames from "classnames";
import {FC} from "react";

export enum CardSize {
  large = 'card_large',
  small = 'card_small',
  medium = 'card_medium'
}

export type Props = {
  size?: CardSize
  centered?: boolean
}

export const UiCard: FC<Props> = ({children, className, size = CardSize.medium, centered = false, ...props}) => {
  return <div {...props} className={classNames('card', className, size, {centered})}>{children}</div>
}