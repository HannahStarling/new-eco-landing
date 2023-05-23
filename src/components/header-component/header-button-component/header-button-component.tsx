import { TMS_URL } from "@/constants/general";
import { BUTTONS_CONTENT } from "@/constants/texts";
import { UiButton } from "@/ui-elements/ui-button/ui-button";
import classNames from "classnames";
import Link from "next/link";
import { FC, ReactNode, PropsWithChildren } from "react";

interface IProps {
  isWhiteHeader: boolean;
}

export const HeaderButtonComponent: FC<PropsWithChildren<IProps>> = ({
  isWhiteHeader,
}) => {
  return (
    <div className="header__button button">
      <Link href={TMS_URL} rel="noopener noreferrer" target="_blank">
        <UiButton
          fillType="outlined"
          mode={"none"}
          className={classNames(
            "button__login",
            isWhiteHeader ? "black" : null
          )}
        >
          {BUTTONS_CONTENT.LOGIN}
        </UiButton>
      </Link>
    </div>
  );
};
