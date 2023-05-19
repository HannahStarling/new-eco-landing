import "./ui-paragraph.scss";
import classNames from "classnames";
import { FC } from "react";

interface IProps {
  size?: ParagraphSize;
  bold?: boolean;
  centered?: boolean;
  children?: any;
  className?: string;
}

export enum ParagraphSize {
  /**
   *       font-size: 24px;
   */
  small = "paragraph_small",
  /**
   *       font-size: 20px;
   */
  medium = "paragraph_medium",
  /**
   *       font-size: 18px;
   */
  large = "paragraph_large",
  /**
   *       font-size: 16px;
   */
  extraLarge = "paragraph_extra-large",
  /**
   *       font-size: 12px;
   */
  extraSmall = "paragraph_extra-small",
}

export const UiParagraph: FC<IProps> = ({
  children,
  className,
  size = ParagraphSize.medium,
  bold,
  centered = false,
  ...props
}) => {
  return (
    <p
      {...props}
      className={classNames(className, "paragraph", size, bold, { centered })}
    >
      {children}
    </p>
  );
};
