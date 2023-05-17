import { FC } from "react";
import { UiButton } from "@/ui-elements/ui-button/ui-button";
import { BUTTONS_CONTENT } from "@/constants/texts";
import classNames from "classnames";
import "./get-access-button-component.scss";

interface IProps {
  full?: boolean;
  uppercase?: boolean;
}

export const GetAccessButtonComponent: FC<IProps> = ({
  full = false,
  uppercase = true,
}) => {
  return (
    <UiButton
      className={classNames("button_get-access", { full, uppercase })}
      mode={"dark"}
      fillType={"outlined"}
    >
      {BUTTONS_CONTENT.GET_ACCESS}
    </UiButton>
  );
};
