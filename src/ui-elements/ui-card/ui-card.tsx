import './ui-card.scss'
import classNames from "classnames";
import React from "react";

export enum CardSize {
  large = 'card_large',
  small = 'card_small',
  medium = 'card_medium'
}

export default function UiCard({children, className, size = CardSize.medium, centered = false, ...props}: {
  children: React.ReactNode,
  size?: CardSize
  centered?: boolean
}) {
  return <div {...props} className={classNames('card', className, size, {centered})}>{children}</div>
}