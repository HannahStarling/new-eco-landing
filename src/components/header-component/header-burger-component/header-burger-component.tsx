"use client";

import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

interface IProps {
  onBurgerClick(): void;

  isOpen: boolean;
}

export const HeaderBurgerComponent: FC<PropsWithChildren<IProps>> = ({
  onBurgerClick,
  isOpen,
}) => {
  return (
    <div className="header__burger" onClick={onBurgerClick}>
      <span className={classNames(isOpen ? "active" : null)} />
    </div>
  );
};
