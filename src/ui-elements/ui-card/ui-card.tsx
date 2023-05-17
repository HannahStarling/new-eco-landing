import "./ui-card.scss";
import classNames from "classnames";
import { FC } from "react";

export enum CardSize {
  large = "card_large",
  small = "card_small",
  medium = "card_medium",
  extraLarge = "card_extra-large",
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
