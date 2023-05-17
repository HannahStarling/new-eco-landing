import { FC } from "react";
import { UiButton, UiButtonProps } from "@/ui-elements/ui-button/ui-button";
import { BUTTONS_CONTENT } from "@/constants/texts";
import classNames from "classnames";
import "./get-access-button-component.scss";

interface IProps extends UiButtonProps {
  full?: boolean;
  uppercase?: boolean;
  hero?: boolean;
}

export const GetAccessButtonComponent: FC<IProps> = ({
  full = false,
  hero = false,
  uppercase = true,
}) => {
  return (
    <UiButton
      className={classNames("button-get-access", {
        full,
        uppercase,
        hero__button: hero,
      })}
      mode={"dark"}
      fillType={"outlined"}
    >
      {BUTTONS_CONTENT.GET_ACCESS}
    </UiButton>
  );
};
