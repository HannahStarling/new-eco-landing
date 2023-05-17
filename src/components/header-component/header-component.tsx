"use client";

import "./styles.scss";
import { HeaderLogoComponent } from "./header-logo-component/header-logo-component";
import { HeaderButtonComponent } from "./header-button-component/header-button-component";
import { MenuComponent } from "@/components/menu-component/menu-component";
import { useRef } from "react";
import { useHeaderScroll } from "@/hooks/useHeaderScroll";
import classNames from "classnames";
import { HeaderBurgerComponent } from "./header-burger-component/header-burger-component";
import { useBurger } from "@/hooks/useBurgerClick";

export const HeaderComponent = () => {
  const headerRef = useRef<HTMLElement>(null);
  const isScroll = useHeaderScroll({ headerRef });
  const { onBurgerClick, isOpen } = useBurger();

  return (
    <header
      ref={headerRef}
      className={classNames("header", isScroll ? "header_sticky" : null)}
    >
      <div className={"header__container"}>
        <HeaderLogoComponent />
        <div className={classNames("header__action", isOpen ? "active" : null)}>
          <div className="header__links">
            <MenuComponent />
            <HeaderButtonComponent />
          </div>
        </div>
        <HeaderBurgerComponent onBurgerClick={onBurgerClick} isOpen={isOpen} />
      </div>
    </header>
  );
};
