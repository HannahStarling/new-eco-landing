import "./detail-button-component.scss";
import { FC } from "react";
import { UiButton, UiButtonProps } from "@/ui-elements/ui-button/ui-button";
import { BUTTONS_CONTENT } from "@/constants/texts";
import classNames from "classnames";

interface IProps extends UiButtonProps {
  full?: boolean;
  uppercase?: boolean;
}

export const DetailButtonComponent: FC<IProps> = ({
  full = false,
  uppercase = true,
  className,
}) => {
  return (
    <UiButton
      className={classNames(
        "button-get-detail",
        {
          full,
          uppercase,
        },
        className
      )}
      mode={"dark"}
      fillType={"outlined"}
    >
      {BUTTONS_CONTENT.DETAIL}
    </UiButton>
  );
};
