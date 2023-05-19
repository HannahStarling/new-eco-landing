import "./get-access-button-component.scss";
import { FC } from "react";
import { UiButton, UiButtonProps } from "@/ui-elements/ui-button/ui-button";
import { BUTTONS_CONTENT } from "@/constants/texts";
import classNames from "classnames";

interface IProps extends UiButtonProps {
  big?: boolean;
  full?: boolean;
  uppercase?: boolean;
  cover?: boolean;
}

export const GetAccessButtonComponent: FC<IProps> = ({
  mode = "dark",
  fillType = "outlined",
  children,
  big = false,
  full = false,
  cover = false,
  uppercase = true,
  className,
}) => {
  return (
    <UiButton
      className={classNames(
        "button-get-access",
        {
          big,
          full,
          uppercase,
          cover__button: cover,
        },
        className
      )}
      mode={mode}
      fillType={fillType}
    >
      {children ?? BUTTONS_CONTENT.GET_ACCESS}
    </UiButton>
  );
};
