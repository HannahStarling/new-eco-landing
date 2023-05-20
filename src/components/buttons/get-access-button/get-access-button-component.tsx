import "./get-access-button-component.scss";
import { FC } from "react";
import { UiButtonProps } from "@/ui-elements/ui-button/ui-button";
import { BUTTONS_CONTENT } from "@/constants/texts";
import classNames from "classnames";
import { ConnectModal } from "@/components/connect-modal/connect-modal";
import { Mode, Type } from "@/ui-elements/ui-button/types";

interface IProps extends UiButtonProps {
  mode?: Mode;
  fillType?: Type;
  big?: boolean;
  full?: boolean;
  uppercase?: boolean;
  cover?: boolean;
}

export const GetAccessButtonComponent: FC<IProps> = ({
  mode = "dark",
  fillType = "outlined",
  big = false,
  full = false,
  cover = false,
  uppercase = true,
  className,
}) => {
  return (
    <ConnectModal
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
      buttonText={BUTTONS_CONTENT.GET_ACCESS}
    />
  );
};
