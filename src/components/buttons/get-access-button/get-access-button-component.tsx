import "./get-access-button-component.scss";
import { FC, PropsWithChildren } from "react";
import { UiButtonProps } from "@/ui-elements/ui-button/ui-button";
import classNames from "classnames";
import { ConnectModal } from "@/components/connect-modal/connect-modal";
import { FillType, Mode } from "@/ui-elements/ui-button/types";
import { BUTTONS_CONTENT } from "@/constants/texts";

interface IProps extends UiButtonProps {
  mode?: Mode;
  fillType?: FillType;
  big?: boolean;
  full?: boolean;
  uppercase?: boolean;
  cover?: boolean;
}

export const GetAccessButtonComponent: FC<PropsWithChildren<IProps>> = ({
  children,
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
      buttonText={children ?? BUTTONS_CONTENT.GET_ACCESS}
    />
  );
};
