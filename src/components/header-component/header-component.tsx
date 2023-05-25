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
import Link from "next/link";

export const HeaderComponent = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const { isScroll, isFixed } = useHeaderScroll({ headerRef });
  const { onBurgerClick, isOpen } = useBurger();
  const isWhiteHeader = isScroll || isFixed || isOpen;

  return (
    <header
      ref={headerRef}
      className={classNames("header", isWhiteHeader ? "header_sticky" : null)}
    >
      <div className={"header__container"}>
        <Link href="/">
          <HeaderLogoComponent isWhiteHeader={isWhiteHeader} />
          <div className={"header__black-logo"}></div>
        </Link>
        <div className={classNames("header__action", isOpen ? "active" : null)}>
          <div className="header__links">
            <MenuComponent isWhiteHeader={isWhiteHeader} />
            <HeaderButtonComponent isWhiteHeader={isWhiteHeader} />
          </div>
        </div>
        <HeaderBurgerComponent onBurgerClick={onBurgerClick} isOpen={isOpen} />
      </div>
    </header>
  );
};
