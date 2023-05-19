import "./ui-card.scss";
import classNames from "classnames";
import { FC } from "react";

export enum CardSize {
  /**
   *   padding: 32px 20px;
   */
  large = "card_large",
  /**
   *   padding: 24px 20px;
   */
  small = "card_small",
  /**
   *   padding: 16px 20px;
   */
  medium = "card_medium",
  /**
   *   padding: 16px 20px;
   */
  extraLarge = "card_extra-large",
  /**
   *   padding: 20px;
   */
  square = "card_square",
}

export interface IProps {
  size?: CardSize;
  centered?: boolean;
  children?: any;
  className?: string;
}

export const UiCard: FC<IProps> = ({
  children,
  className,
  size = CardSize.medium,
  centered = false,
  ...props
}) => {
  return (
    <div
      {...props}
      className={classNames("card", className, size, { centered })}
    >
      {children}
    </div>
  );
};
