import { BUTTONS_CONTENT } from "@/constants/texts";
import { UiButton } from "@/ui-elements/ui-button/ui-button";
import classNames from "classnames";
import { FC, ReactNode } from "react";
interface IProps {
  children?: ReactNode;
  isOpen: boolean;
  isScroll: boolean;
}

export const HeaderButtonComponent: FC<IProps> = ({ isOpen, isScroll }) => {
  return (
    <div className="header__button button">
      <UiButton
        fillType="outlined"
        mode={"none"}
        className={classNames(
          "button__login",
          isOpen || isScroll ? "black" : null
        )}
      >
        {BUTTONS_CONTENT.LOGIN}
      </UiButton>
    </div>
  );
};
