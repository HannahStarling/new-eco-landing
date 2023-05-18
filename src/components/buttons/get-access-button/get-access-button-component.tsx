import "./get-access-button-component.scss";
import { FC } from "react";
import { UiButton, UiButtonProps } from "@/ui-elements/ui-button/ui-button";
import { BUTTONS_CONTENT } from "@/constants/texts";
import classNames from "classnames";

interface IProps extends UiButtonProps {
  full?: boolean;
  uppercase?: boolean;
  cover?: boolean;
}

export const GetAccessButtonComponent: FC<IProps> = ({
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
          full,
          uppercase,
          cover__button: cover,
        },
        className
      )}
      mode={"dark"}
      fillType={"outlined"}
    >
      {BUTTONS_CONTENT.GET_ACCESS}
    </UiButton>
  );
};
