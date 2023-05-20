import { BUTTONS_CONTENT } from "@/constants/texts";
import { UiButton } from "@/ui-elements/ui-button/ui-button";
import classNames from "classnames";
import { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
  isWhiteHeader: boolean;
}

export const HeaderButtonComponent: FC<IProps> = ({ isWhiteHeader }) => {
  return (
    <div className="header__button button">
      <UiButton
        fillType="outlined"
        mode={"none"}
        className={classNames("button__login", isWhiteHeader ? "black" : null)}
      >
        {BUTTONS_CONTENT.LOGIN}
      </UiButton>
    </div>
  );
};
